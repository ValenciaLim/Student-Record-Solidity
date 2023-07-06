pragma solidity ^0.5.10;

contract StudentRecordContract {
    enum StudentStatus { Current, Transferred, Expelled, Graduated }
    
    // can create other types of record e.g. sec school record, university record
    // polytechnic record
    struct Record {
        uint recordNo;
        uint studentNo;
        string polytechnicID;
        string schoolID;
        string courseCode;
        mapping(string => Module) modules; // to store the modules and its grade
        string[] moduleCodeList; // lookup table, validate to prevent duplicate
        mapping(uint => Cca) ccas; // to store cca achievements mapped to list index
        uint CcaCount; 
        mapping(uint => CertAward) certAwards; // to store certificates and awards
        uint[] certNoList;
        StudentStatus status;
        Student student;
    }

    struct Student {
        string fullName;
        string nric;
        address walletAddress; // used to identify student that is using the app
        address[] authorisedViewers;
    }
    
    struct Module{
        string code;
        string name;
        uint credit;
        string grade;
    }

    struct Cca{
        string clubName;
        string achievement;
        uint points;
    }

    struct CertAward{
        uint certNo;
        string certName;
        string issuedBy;
        string dateOfIssue;
        string certAchievement;
    }
    
    /*struct InstitutStaff{
        uint staffNo;
        string staffName;
        address staffWalletAddress;
        string polytechnicID;
        string schoolID;
    }*/

    mapping(uint => Record)private records;
    uint public recordCount;
    mapping(address => Student)private students;
    address[] public studentAddressList; // lookup table for students mapping
    //mapping(address => InstitutStaff)private institutStaffs;
    address[] public staffAddressList; // lookup table for institutStaffs mapping;

    function getRecord (uint _recordNo) public view returns (uint, string memory, string memory, string memory, string memory,
    string memory, string memory, address) {
        Record memory r = records[_recordNo];
        string memory studStatus = "";
        if (records[_recordNo].status == StudentStatus.Current){
            studStatus = "Current";
        }
        else if(records[_recordNo].status == StudentStatus.Transferred){
            studStatus = "Transferred";
        }
        else if(records[_recordNo].status == StudentStatus.Expelled){
            studStatus = "Expelled";
        }
        else{
            studStatus = "Graduated";
        }

        return (r.studentNo, r.polytechnicID, r.schoolID, r.courseCode, studStatus, r.student.fullName, r.student.nric, r.student.walletAddress);
    }

    function createNewRecord (uint _studentNo, string memory _polyID, string memory _schoolID, string memory _courseCode,
    string memory _fullName, string memory _nric, address _address) public {
        recordCount++;
        address[] memory noViewers;
        StudentRecordContract.Student memory newStudent = Student(_fullName, _nric, _address, noViewers);

        // check that it is really a new student
        bool addressFound = checkAddress(_nric, _address);
        if (addressFound == false){
            students[_address] = newStudent;
            studentAddressList.push(_address);
        }

        string[] memory noModuleCode;
        uint[] memory noCertName;

        bool currentRecordExist = findARecord(_nric);
        
        if(currentRecordExist == false){
            records[recordCount] = Record(recordCount, _studentNo, _polyID, _schoolID, _courseCode, 
            noModuleCode, 0, noCertName, StudentStatus.Current, newStudent);
        }
    }

    // check that nric is not used for a current record
    function findARecord(string memory _nric) public view returns(bool) {
        bool currentRecordExist = false;
        for (uint i=1; i<=recordCount; i++){
            if (keccak256(abi.encodePacked(records[i].student.nric)) == keccak256(abi.encodePacked(_nric)) && 
            records[i].status == StudentStatus.Current){
                currentRecordExist = true;
            }
        } 
        
        return currentRecordExist;
    }

    // check that wallet address is not used
    function checkAddress(string memory _nric, address _address) public view returns(bool){
        bool addressFound = false;
        for (uint i=0; i<studentAddressList.length; i++){
            // address found but nric is not the same as recorded means that it is being used for another student
            if (studentAddressList[i] == _address && 
            keccak256(abi.encodePacked(students[studentAddressList[i]].nric)) != keccak256(abi.encodePacked(_nric))){
                addressFound = true;
            }   
        }

        return addressFound;
    }

    // get grade for a module of a student
    function getGrade(uint _recordNo, string memory _code) public view returns (string memory, string memory, uint, string memory){
        return(_code, (records[_recordNo].modules)[_code].name, (records[_recordNo].modules)[_code].credit, (records[_recordNo].modules)[_code].grade);
    }

    function moduleListLen(uint _recordNo) public view returns(uint){
        return records[_recordNo].moduleCodeList.length;
    }

    // get module code from moduleCodeList of a student record, using an index
    function getModuleCode(uint _recordNo, uint _index) public view returns(string memory){
        return records[_recordNo].moduleCodeList[_index];
    }

    function addGrade(uint _studentNo, string memory _polyID, string memory _code, string memory _name, uint _credit, string memory _grade) public {
        (bool check, uint recordNo) = checkStudNoPoly(_studentNo, _polyID);
        
        if(check == true){
            bool codeFound = checkModuleCode(recordNo, _code);
            if (codeFound == false){
                (records[recordNo].modules)[_code] = Module(_code, _name, _credit, _grade);
                records[recordNo].moduleCodeList.push(_code);
            }
        }
    }

    function checkStudNoPoly(uint _studentNo, string memory _polyID) public view returns(bool, uint){
        uint recordNo = 0;
        bool numExistInPoly = false;
        for (uint i=1; i<=recordCount; i++){
            if (records[i].studentNo == _studentNo &&
            keccak256(abi.encodePacked(records[i].polytechnicID)) == keccak256(abi.encodePacked(_polyID)) &&
            records[i].status == StudentStatus.Current){
                numExistInPoly = true;
                recordNo = i;
            }
        }

        return (numExistInPoly, recordNo);
    }

    function checkModuleCode(uint _recordNo, string memory _code) public view returns(bool){
        bool codeFound = false;
        for (uint i=0; i<records[_recordNo].moduleCodeList.length; i++){
            if (keccak256(abi.encodePacked(records[_recordNo].moduleCodeList[i])) 
            == keccak256(abi.encodePacked(_code))){
                codeFound = true;
            }   
        }

        return codeFound;
    }

    function getCcaAchievement(uint _recordNo, uint _index) public view returns (string memory, string memory, uint){
        return((records[_recordNo].ccas)[_index].clubName, (records[_recordNo].ccas)[_index].achievement, (records[_recordNo].ccas)[_index].points);
    }

    function getCcaCount(uint _recordNo) public view returns(uint){
        return records[_recordNo].CcaCount;
    }

    function addCcaAchievement(uint _studentNo, string memory _polyID, string memory _clubname, string memory _achievement, uint _points) public {
        (bool check, uint recordNo) = checkStudNoPoly(_studentNo, _polyID);

        if (check == true){
            uint nextCcaIndex = records[recordNo].CcaCount + 1;
            (records[recordNo].ccas)[nextCcaIndex] = Cca(_clubname, _achievement, _points);
            records[recordNo].CcaCount ++;
        }
    }

    function getCertAward(uint _recordNo, uint _certNo) public view returns (uint, string memory, string memory, string memory, string memory){
        return(_certNo, (records[_recordNo].certAwards)[_certNo].certName, (records[_recordNo].certAwards)[_certNo].issuedBy, (records[_recordNo].certAwards)[_certNo].dateOfIssue, (records[_recordNo].certAwards)[_certNo].certAchievement);
    }

    function certListLen(uint _recordNo) public view returns(uint){
        return records[_recordNo].certNoList.length;
    }

    function getCertNo(uint _recordNo, uint _index) public view returns(uint){
        return records[_recordNo].certNoList[_index];
    }

    function addCertAward(uint _studentNo, string memory _polyID, uint _certNo, string memory _certName, string memory _issuedBy, string memory _dateOfIssue, string memory _award) public {
        (bool check, uint recordNo) = checkStudNoPoly(_studentNo, _polyID);      
        
        if(check == true){
            bool noFound = checkCertNo(recordNo, _certNo);
            if (noFound == false){
                (records[recordNo].certAwards)[_certNo] = CertAward(_certNo, _certName, _issuedBy, _dateOfIssue, _award);
                records[recordNo].certNoList.push(_certNo);
            }
        }
    }

    function checkCertNo(uint _recordNo, uint _certNo) public view returns(bool){
        bool noFound = false;
        for (uint i=0; i<records[_recordNo].certNoList.length; i++){
            if (keccak256(abi.encodePacked(records[_recordNo].certNoList[i])) 
            == keccak256(abi.encodePacked(_certNo))){
                noFound = true;
            }   
        }

        return noFound;
    }

    function setStatus(uint _studentNo, string memory _polyID, string memory _status) public{
        for (uint i=1; i<=recordCount; i++){
            if (records[i].studentNo == _studentNo &&
            keccak256(abi.encodePacked(records[i].polytechnicID)) == keccak256(abi.encodePacked(_polyID)) &&
            records[i].status == StudentStatus.Current){
                if (keccak256(bytes(_status)) == keccak256(bytes("Current"))){
                    records[i].status = StudentStatus.Current;
                }
                else if(keccak256(bytes(_status)) == keccak256(bytes("Transferred"))){
                    records[i].status = StudentStatus.Transferred;
                }
                else if(keccak256(bytes(_status)) == keccak256(bytes("Expelled"))){
                    records[i].status = StudentStatus.Expelled;
                }
                else{
                    records[i].status = StudentStatus.Graduated;
                }
            }
        } 
    }

    function checkNric(string memory _nric) public view returns(bool) {
        bool nricFound = false;
        for (uint i=0; i<studentAddressList.length; i++){
            address studAddress = studentAddressList[i];
            if (keccak256(abi.encodePacked(students[studAddress].nric)) == keccak256(abi.encodePacked(_nric))){
                nricFound = true;
            }
        } 
        
        return nricFound;
    }

    function getAuthViewers(string memory _nric, address _acctAddress) public view returns(bool){
        bool authorised = false;

        uint studentCount = studentAddressList.length;
        for (uint i=0; i<studentCount; i++){
            address studAddress = studentAddressList[i];
            
            // check if student with _nric exist
            if(keccak256(abi.encodePacked(students[studAddress].nric)) 
            == keccak256(abi.encodePacked(_nric))){
                // check if student is viewing own record
                if(studAddress == _acctAddress){
                    authorised = true;
                }

                // check if address in authorised address list
                for (uint x=0; x<(students[studAddress].authorisedViewers).length; x++){
                    if ((students[studAddress].authorisedViewers)[x] == _acctAddress){
                        authorised = true;
                    }
                }
            }
        }
        
        // check if staff is viewing their student's record
        for (uint a =0; a<staffAddressList.length; a++){
            if (staffAddressList[a] == _acctAddress){
                authorised = true;
            }
        }

        return authorised;
    }

    function authoriseViewer(address _acctAddress, address _viewerAddress) public{
        bool addressFound = false;
        
        for (uint i=0; i<(students[_acctAddress].authorisedViewers).length; i++){
            if ((students[_acctAddress].authorisedViewers)[i] == _viewerAddress){
                addressFound = true;
            }
        }

        if (addressFound == false){
            (students[_acctAddress].authorisedViewers).push(_viewerAddress);

            for (uint i=1; i<=recordCount; i++){
                if (records[i].student.walletAddress == _acctAddress){
                    records[i].student = students[_acctAddress];
                }
            }
        }
    }

    function removeViewer(address _acctAddress, address _viewerAddress) public{
        bool addressFound = false;

        // find index of _viewerAddress
        uint index = 0;
        for (uint i=0; i<(students[_acctAddress].authorisedViewers).length; i++){
            if ((students[_acctAddress].authorisedViewers)[i] == _viewerAddress){
                addressFound = true;
                index = i;
            }
        }

        if (addressFound == true){
            address last = (students[_acctAddress].authorisedViewers)[(students[_acctAddress].authorisedViewers).length -1];
            (students[_acctAddress].authorisedViewers)[(students[_acctAddress].authorisedViewers).length -1] = _viewerAddress;
            (students[_acctAddress].authorisedViewers)[index] = last;
            (students[_acctAddress].authorisedViewers).pop();
            for (uint i=1; i<=recordCount; i++){
                if (records[i].student.walletAddress == _acctAddress){
                    records[i].student = students[_acctAddress];
                }
            }
        }
    }
    
    /*function registerNewStaff(uint _staffNo, string memory _staffName, address _staffWalletAddress, string memory _polyID, string memory _schoolID) public{
        institutStaffs[_staffWalletAddress] = InstitutStaff(_staffNo, _staffName, _staffWalletAddress, _polyID, _schoolID);
        staffAddressList.push(_staffWalletAddress);
    }
    
    function getStaff (address _address) public view returns (uint, string memory, address, string memory, string memory) {
        return (institutStaffs[_address].staffNo, institutStaffs[_address].staffName, institutStaffs[_address].staffWalletAddress, institutStaffs[_address].polytechnicID, institutStaffs[_address].schoolID);
    }*/
    
    function checkAcctType(address _acctAddress) public view returns (string memory){
        string memory acctType = "";
        
        for (uint s=0; s<studentAddressList.length; s++){
            if(studentAddressList[s] == _acctAddress){
                acctType = "Student";
            }
        }
        
        for (uint i=0; i<staffAddressList.length; i++){
            if(staffAddressList[i] == _acctAddress){
                acctType = "Institution Staff";
            }
        }
        
        return acctType;
    }

    constructor() public {
        staffAddressList.push(0xC8D21a6B7869065B381dAC3c49AEe5d7674551D5);
        createNewRecord(192252, "NYP", "SIT", "DBFT", "Valen Lam", "T12345678Q", 0xD62659d24cb2E8ffc3E260dB2338F3173f69d3A2);
    }

}