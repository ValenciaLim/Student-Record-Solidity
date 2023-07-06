// The object 'Contracts' will be injected here, which contains all data for all contracts, keyed on contract name:
var Contracts  = { StudentRecordContract: {
abi: [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_clubname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_achievement",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_points",
				"type": "uint256"
			}
		],
		"name": "addCcaAchievement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_certNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_certName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_issuedBy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfIssue",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_award",
				"type": "string"
			}
		],
		"name": "addCertAward",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_code",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_credit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_grade",
				"type": "string"
			}
		],
		"name": "addGrade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_acctAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_viewerAddress",
				"type": "address"
			}
		],
		"name": "authoriseViewer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_schoolID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courseCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nric",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "createNewRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_acctAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_viewerAddress",
				"type": "address"
			}
		],
		"name": "removeViewer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			}
		],
		"name": "setStatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			}
		],
		"name": "certListLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_acctAddress",
				"type": "address"
			}
		],
		"name": "checkAcctType",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nric",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_certNo",
				"type": "uint256"
			}
		],
		"name": "checkCertNo",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code",
				"type": "string"
			}
		],
		"name": "checkModuleCode",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nric",
				"type": "string"
			}
		],
		"name": "checkNric",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_polyID",
				"type": "string"
			}
		],
		"name": "checkStudNoPoly",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nric",
				"type": "string"
			}
		],
		"name": "findARecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nric",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_acctAddress",
				"type": "address"
			}
		],
		"name": "getAuthViewers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getCcaAchievement",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			}
		],
		"name": "getCcaCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_certNo",
				"type": "uint256"
			}
		],
		"name": "getCertAward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getCertNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code",
				"type": "string"
			}
		],
		"name": "getGrade",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getModuleCode",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			}
		],
		"name": "getRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recordNo",
				"type": "uint256"
			}
		],
		"name": "moduleListLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "recordCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "staffAddressList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studentAddressList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],
address: "0x804b405e6f5281c802d1ad56da40c26b5812eacf",
endpoint: "https://ropsten.infura.io/v3/undefined"
}}

function StudentRecordApp(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}

StudentRecordApp.prototype.onReady = function() {
    this.init(function () {
        $('#message').append("DApp loaded successfully.");
    });
    this.bindButtons();
    this.loadStudentRecord();
    $("[name='recordtype']")[0].checked = true;
    changeRecordType("polytechnic");
}

StudentRecordApp.prototype.init = function(cb) {
    // We create a new Web3 instance using either the Metamask provider
    // or an independent provider created towards the endpoint configured for the contract.
    if (window.ethereum) {
        this.web3 = new Web3(ethereum);
        try{
        ethereum.enabled();
        }
        catch(error){
        }
    }
    else if(window.web3){
    this.web3 = new Web3(web3.currentProvider);
    }
    else{
    this.web3 = new Web3.providers.HttpProvider(this.Contract.endpoint);
    }

    // Create the contract interface using the ABI provided in the configuration.
    var contract_interface = this.web3.eth.contract(this.Contract.abi);

    // Create the contract instance for the specific address provided in the configuration.
    this.instance = contract_interface.at(this.Contract.address);

    cb();
}

if(typeof(Contracts) === "undefined") var Contracts={ StudentRecordContract: { abi: [] }};
var studentRecordApp = new StudentRecordApp(Contracts['StudentRecordContract']);


$(window).on('load', function(){
    $(document).ready(function() {
        studentRecordApp.onReady();
    });
});

StudentRecordApp.prototype.getRecordCount = function (cb) {
    this.instance.recordCount(function (error, recordCount){
        cb(error, recordCount)
    });
};

StudentRecordApp.prototype.getRecord = function (_recordNo, cb) {
    this.instance.getRecord(_recordNo, function (error, result){
        cb(error, result)
    });
};

StudentRecordApp.prototype.getModuleCode = function (_recordNo, _index, cb) {
    this.instance.getModuleCode(_recordNo, _index, function (error, moduleCode){
        cb(error, moduleCode)
    });
};

StudentRecordApp.prototype.getGrade = function (_recordNo, _moduleCode, cb) {
    this.instance.getGrade(_recordNo, _moduleCode, function (error, result){
        cb(error, result)
    });
};

StudentRecordApp.prototype.getCcaCount = function (_recordNo, cb) {
    this.instance.recordCount(_recordNo, function (error, ccaCount){
        cb(error, ccaCount)
    });
};

StudentRecordApp.prototype.getCcaAchievement = function (_recordNo, _index, cb) {
    this.instance.getCcaAchievement(_recordNo, _index, function (error, result){
        cb(error, result)
    });
};

StudentRecordApp.prototype.getCertAward = function (_recordNo, _certNo, cb) {
    this.instance.getCertAward(_recordNo, _certNo, function (error, result){
        cb(error, result)
    });
};

StudentRecordApp.prototype.getCertNo = function (_recordNo, _index, cb) {
    this.instance.getCertNo(_recordNo, _index, function (error, certNo){
        cb(error, certNo)
    });
};

StudentRecordApp.prototype.checkAcctType = function (_acctAddress, cb) {
    this.instance.checkAcctType(_acctAddress, function (error, acctType){
        cb(error, acctType)
    });
};

StudentRecordApp.prototype.loadStudentRecord = function(){
    var that = this;
    $("#records").empty();
    $("#myrecords").empty();

    //clear all record views
    $('#myFullName').text("");
    $('#myNric').text("");
    $('#myStudentNo').text("");
    $('#myPoly').text("");
    $('#mySchool').text("");
    $('#myCourse').text("");
    $('#myStatus').text("");

    $("#myModules").empty();
    $("#myCcas").empty();
    $("#myCertAwards").empty();

    $("#nric").val("");
    $("#astudrecords").empty();
    $('#tdFullName').text("");
    $('#tdNric').text("");
    $('#tdStudentNo').text("");
    $('#tdPoly').text("");
    $('#tdSchool').text("");
    $('#tdCourse').text("");
    $('#tdStatus').text("");

    $("#modules").empty();
    $("#ccas").empty();
    $("#cert_awards").empty();

    web3.eth.getAccounts((err, res) => {
        var acctAddress = web3.toChecksumAddress(res[0]);
        that.checkAcctType(acctAddress, function(error, acctType){
            if (error){
                console.log(error);
            }
            else{
                if(acctType == "Student"){
                    $("#my-records-btn").show();
                    $("#auth-viewers-btn").show();
                    $("#create-btn").hide();
                    $("#add-btns").hide();
                    $("#view-record-btn").hide();
                    $("#unregister-btn").hide();
                    $("#studentrecordList").hide();

                    $('#myRecord').css('visibility', 'hidden');

                    that.getRecordCount(function(error, recordCount) {
                        if (error) {
                            console.log(error)
                        }
                        else{
                            $("#myrecords").empty();
                            for (let i = 1; i<=recordCount; i++){
                                that.getRecord(i, function(error, result){
                                    if (error) {
                                        console.log(error)
                                    }
                                    else{
                                        if(result[7] == web3.eth.accounts[0]){
                                            var studentNo = result[0];
                                            var polyID = result[1];

                                            var btnId = "showrecord" + i;
                                            var clickbtn = "<button id='"+btnId+"' class='btn btn-default'>Select</button>";
                                            $("#"+btnId).off("click").click(function() { that.showMyRecord(i); });
                                            $(document).on('click', '#'+btnId , function() {
                                                that.showMyRecord(i);
                                            });
                                            var recordTemplate = "<tr><td>" + studentNo + "</td><td>" + polyID + "</td><td>" + clickbtn + "</td><tr>"
                                            $("#myrecords").append(recordTemplate);
                                        }
                                    }
                                });
                            }
                        }
                    })
                }
                else if(acctType == "Institution Staff"){
                    $("#create-btn").show();
                    $("#add-btns").show();
                    $("#view-record-btn").show();
                    $("#unregister-btn").show();
                    $("#studentrecordList").show();
                    $("#my-records-btn").hide();
                    $("#auth-viewers-btn").hide();

                    that.getRecordCount(function(error, recordCount) {
                        if (error) {
                            console.log(error)
                        }
                        else{
                            $("#records").empty();
                            for (let i = 1; i<=recordCount; i++){
                                var recordNo = i;
                                that.getRecord(recordNo, function(error, result){
                                    if (error) {
                                        console.log(error)
                                    }
                                    else{
                                        var number = result[0];
                                        var nric = result[6];
                                        var recordTemplate = "<tr><td>" + number + "</td><td>" + nric + "</td><tr>"
                                        $("#records").append(recordTemplate);
                                    }
                                });
                            }
                        }
                    });
                }
                else{
                    $("#view-record-btn").show();
                    $("#create-btn").hide();
                    $("#add-btns").hide();
                    $("#unregister-btn").hide();
                    $("#my-records-btn").hide();
                    $("#auth-viewers-btn").hide();
                    $("#studentrecordList").hide();
                }
            }
        })
    });
}

StudentRecordApp.prototype.findARecord = function (_nric, cb){
    this.instance.findARecord(_nric, function (error, exist){
        cb(error, exist)
    });
}

StudentRecordApp.prototype.checkAddress = function (_nric, _address, cb){
    this.instance.checkAddress(_nric, _address, function (error, found){
        cb(error, found)
    });
}

StudentRecordApp.prototype.createNewRecord = function(){
    var that = this;

    var newStudentNo = $("#newStudentNo").val();
    var newFullName = $("#newFullName").val();
    var newWalletAddress = $("#newWalletAddress").val();
    var newNric = $("#newNric").val().toUpperCase();
    var newPolyID = $("#newPolyID").val();
    var newSchoolID = $("#newSchoolID").val();
    var newCourseCode = $("#newCourseCode").val();
    $("#message").text("Creating new record for " + newNric);

    if (newStudentNo != "" && newFullName != "" && newNric != "" && newWalletAddress != "" && 
    newPolyID != "" && newSchoolID != "" && newCourseCode != ""){
        that.findARecord(newNric, function(error, exist){
            if (error) {
                console.log(error)
            }
            else{
                if(exist == true){
                    alert("You are not allowed to create a record with this NRIC.");
                }
                else{
                    that.checkAddress(newNric, newWalletAddress, function(error, found){
                        if (error){
                            console.log(error)
                        }
                        else{
                            if (found == false){
                                that.instance.createNewRecord(newStudentNo, newPolyID, newSchoolID, newCourseCode, newFullName, newNric, newWalletAddress, 
                                { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
                                function(error, txHash){
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                                        that.waitForReceipt(txHash, function(receipt) {
                                            if(receipt.status == 1){
                                                $("#newStudentNo").val("");
                                                $("#newFullName").val("");
                                                $("#newWalletAddress").val("");
                                                $("#newNric").val("");
                                                $("#newPolyID").val("");
                                                $("#newSchoolID").val("");
                                                $("#newCourseCode").val("");

                                                alert("New student record created successfully")
                                                that.loadStudentRecord();
                                            }
                                            else{
                                                $("#message").text("Record not created");
                                            }
                                        });
                                    }
                                })
                            }
                            else{
                                alert("Invalid wallet address")
                            }
                        }
                    })
                }
            }
        });
    }
}  

StudentRecordApp.prototype.bindButtons = function(){
    var that = this;

    $(document).on("click", "#button-create-record", function(){
        that.createNewRecord();
    });

    $(document).on("click", "#button-add-grade", function(){
        that.addGrade();
    });

    $(document).on("click", "#button-add-cca-achievement", function(){
        that.addCcaAchievement();
    });

    $(document).on("click", "#button-add-cert-award", function(){
        that.addCertAward();
    });

    $(document).on("click", "#button-unregister", function(){
        that.setStatus();
    });

    $(document).on("click", "#button-view-record", function(){
        that.viewRecord();
    });

    $(document).on("click", "#button-authorise", function(){
        that.authoriseViewer();
    });

    $(document).on("click", "#button-remove", function(){
        that.removeViewer();
    });

    $(document).on("click", "#account", function(){
        that.loadStudentRecord();
    });
}

StudentRecordApp.prototype.checkStudNoPoly = function (_studentNo, _polyID, cb) {
    this.instance.checkStudNoPoly(_studentNo, _polyID, function (error, result){
        cb(error, result)
    });
};

StudentRecordApp.prototype.checkModuleCode = function (_recordNo, _code, cb){
    this.instance.checkModuleCode(_recordNo, _code, function (error, found){
        cb(error, found)
    });
}

StudentRecordApp.prototype.addGrade = function(){
    var that = this;

    var agStudentNo = $("#agStudentNo").val();
    var agPolyID = $("#agPolyID").val();
    var agModuleCode = $("#agModuleCode").val();
    var agModuleName = $("#agModuleName").val();
    var agCredit = $("#agCredit").val();
    var agGrade = $("#agGrade").val();
    $("#message").text("Adding student no." + agStudentNo + "'s grade for " + agModuleCode);

    if (agStudentNo != "" && agPolyID != "" && agModuleCode != "" && agModuleName != "" &&
    agCredit != "" && agGrade != ""){
        that.checkStudNoPoly(agStudentNo, agPolyID, function(error, result){
            if (error){
                console.log(error)
            }
            else{
                var check = result[0];
                var recordNo = result[1];
                if (check == true){
                    that.checkModuleCode(recordNo, agModuleCode, function(error, found){
                        if (error){
                            console.log(error)
                        }
                        else{
                            if (found == false){
                                that.instance.addGrade(agStudentNo, agPolyID, agModuleCode, agModuleName, agCredit, agGrade,
                                { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
                                function(error, txHash){
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                                        that.waitForReceipt(txHash, function(receipt) {
                                            if(receipt.status == 1){
                                                $("#agStudentNo").val("");
                                                $("#agPolyID").val("");
                                                $("#agModuleCode").val("");
                                                $("#agModuleName").val("");
                                                $("#agCredit").val("");
                                                $("#agGrade").val("");

                                                alert("Grade added successfully")
                                                that.loadStudentRecord();
                                            }
                                            else{
                                                $("#message").text("Grade not added");
                                            }
                                        });
                                    }
                                });
                            }
                            else{
                                alert("Grade for this module has been added for this student")
                            }
                        }
                    })
                }
                else{
                    alert("Student No cannot be found in the institution.")
                }
            }
        })
    }
}

StudentRecordApp.prototype.addCcaAchievement = function(){
    var that = this;

    var acaStudentNo = $("#acaStudentNo").val();
    var acaPolyID = $("#acaPolyID").val();
    var acaClubName = $("#acaClubName").val();
    var acaAchievementTitle = $("#acaAchievementTitle").val();
    var acaPoints = $("#acaPoints").val();
    $("#message").text("Adding student no. " + acaStudentNo + "'s cca achievement for " + acaClubName);

    if (acaStudentNo != "" && acaPolyID != "" && acaClubName != "" && acaAchievementTitle != "" && acaPoints != ""){
        that.checkStudNoPoly(acaStudentNo, acaPolyID, function(error, result){
            if (error){
                console.log(error);
            }
            else{
                var check = result[0];
                if (check == true){
                    that.instance.addCcaAchievement(acaStudentNo, acaPolyID, acaClubName, acaAchievementTitle, acaPoints, 
                    { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
                    function(error, txHash){
                        if(error){
                            console.log(error);
                        }
                        else{
                            that.waitForReceipt(txHash, function(receipt) {
                                if(receipt.status == 1){
                                    $("#acaStudentNo").val("");
                                    $("#acaPolyID").val("");
                                    $("#acaClubName").val("");
                                    $("#acaAchievementTitle").val("");
                                    $("#acaPoints").val("");

                                    alert("CCA achievement added successfully")
                                    that.loadStudentRecord();
                                }
                                else{
                                    $("#message").text("CCA achievement not added");
                                }
                            });
                        }
                    });
                }
                else{
                    alert("Student No cannot be found in the institution.")
                }
            }
        });
    }
}

StudentRecordApp.prototype.addCertAward = function(){
    var that = this;

    var acertStudentNo = $("#acertStudentNo").val();
    var acertPolyID = $("#acertPolyID").val();
    var acertNo = $("#acertNo").val();
    var acertName = $("#acertName").val();
    var acertIssuedBy = $("#acertIssuedBy").val();
    var acertIssueDate = $("#acertIssueDate").val();
    var acertAchievement = $("#acertAchievement").val();
    $("#message").text("Adding certificate/award " + acertNo + " for student no. " + acertStudentNo);

    if (acertStudentNo != "" && acertPolyID != "" && acertNo != "" && acertName != "" && acertIssuedBy != "" &&
    acertIssueDate != "" && acertAchievement != ""){
        that.checkStudNoPoly(acertStudentNo, acertPolyID, function(error, result){
            if (error){
                console.log(error)
            }
            else{
                var check = result[0];
                var recordNo = result[1];
                if (check == true){
                    that.checkCertNo(recordNo, acertNo, function(error, found){
                        if (error){
                            console.log(error)
                        }
                        else{
                            if(found == false){
                                that.instance.addCertAward(acertStudentNo, acertPolyID, acertNo, acertName, acertIssuedBy, acertIssueDate, acertAchievement,  
                                { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
                                function(error, txHash){
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                                        that.waitForReceipt(txHash, function(receipt) {
                                            if(receipt.status == 1){
                                                $("#acertStudentNo").val("");
                                                $("#acertPolyID").val("");
                                                $("#acertNo").val("");
                                                $("#acertName").val("");
                                                $("#acertIssuedBy").val("");
                                                $("#acertIssueDate").val("");
                                                $("#acertAchievement").val("");
                                                $("#message").text("Adding certificate/award" + acertNo + "for student no. " + acertStudentNo);

                                                alert("Certificate/Award added successfully")
                                                that.loadStudentRecord();
                                            }
                                            else{
                                                $("#message").text("Certificate/Award not added");
                                            }
                                        });
                                    }
                                })
                            }
                            else{
                                alert("This certificate has been added for this student.")
                            }
                        }
                    })
                } 
                else{
                    alert("Student No cannot be found in the institution.")
                }  
            }
        })
    }     
}

StudentRecordApp.prototype.checkCertNo = function (_recordNo, _certNo, cb){
    this.instance.checkCertNo(_recordNo, _certNo, function (error, found){
        cb(error, found)
    });
}

StudentRecordApp.prototype.setStatus = function(_studentNo, _polyID, _status){
    var that = this;

    var urStudentNo = $("#urStudentNo").val();
    var urPolyID = $("#urPoly").val();
    var urStatus = $("#urStatus").val();

    if (urStudentNo != "" && urPolyID != "" && urStatus != ""){
        that.checkStudNoPoly(urStudentNo, urPolyID, function(error, result){
            if (error){
                console.log(error);
            }
            else{
                var check = result[0];
                if (check == true){
                    that.instance.setStatus(urStudentNo, urPolyID, urStatus,
                    { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
                    function(error, txHash){
                        if(error){
                            console.log(error);
                        }
                        else{
                            that.waitForReceipt(txHash, function(receipt) {
                                if(receipt.status == 1){
                                    $("#urStudentNo").val("");
                                    $("#urPoly").val("");
                                    $("#urStatus").val("");

                                    alert("Student unregistered successfully")
                                    that.loadStudentRecord();
                                }
                                else{
                                    $("#message").text("Student Status not updated");
                                }
                            });
                        }
                    });
                }
                else{
                    alert("Student No cannot be found in the institution.")
                }
            }
        })
    }
}

StudentRecordApp.prototype.moduleListLen = function (_recordNo, cb) {
    this.instance.moduleListLen(_recordNo, function (error, len){
        cb(error, len)
    });
};

StudentRecordApp.prototype.certListLen = function (_recordNo, cb) {
    this.instance.certListLen(_recordNo, function (error, len){
        cb(error, len)
    });
};

StudentRecordApp.prototype.showGrades = function(_recordNo){
    var that = this;

    this.instance.moduleListLen(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 0; i<len; i++){
            // loop through lookup table for module code
            that.getModuleCode(_recordNo, i, function(error, moduleCode){
                if (error) {
                    console.log(error)
                }

                // loop through modules array to get grade
                that.getGrade(_recordNo, moduleCode, function(error, result){
                    if (error) {
                        console.log(error)
                    }

                    $("#modules").empty();
                    var code = moduleCode;
                    var name = result[1];
                    var credit = result[2];
                    var grade = result[3];
                    var moduleTemplate = "<tr><td>" + code + "</td><td colspan='2'>" + name + "</td><td>" +  credit + "</td><td>" + grade + "</td><tr>"
                    $("#modules").append(moduleTemplate);
                })
            });
        }
    });
}

StudentRecordApp.prototype.showMyGrades = function(_recordNo){
    var that = this;

    this.instance.moduleListLen(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 0; i<len; i++){
            // loop through lookup table for module code
            that.getModuleCode(_recordNo, i, function(error, moduleCode){
                if (error) {
                    console.log(error)
                }

                // loop through modules array to get grade
                that.getGrade(_recordNo, moduleCode, function(error, result){
                    if (error) {
                        console.log(error)
                    }

                    $("#myModules").empty();
                    var code = moduleCode;
                    var name = result[1];
                    var credit = result[2];
                    var grade = result[3];
                    var moduleTemplate = "<tr><td>" + code + "</td><td colspan='2'>" + name + "</td><td>" +  credit + "</td><td>" + grade + "</td><tr>"
                    $("#myModules").append(moduleTemplate);
                })
            });
        }
    });
}

StudentRecordApp.prototype.showCcaAchievements = function(_recordNo){
    var that = this;

    this.instance.getCcaCount(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 1; i<=len; i++){
            that.getCcaAchievement(_recordNo, i, function(error, result){
                if (error) {
                    console.log(error)
                }

                $("#ccas").empty();
                var clubName = result[0];
                var achievementTitle = result[1];
                var points = result[2];
                var ccaTemplate = "<tr><td colspan='2'>" + clubName + "</td><td colspan='2'>" + achievementTitle + "</td><td>" + points + "</td><tr>"
                $("#ccas").append(ccaTemplate);
            })
        }
    });
}

StudentRecordApp.prototype.showMyCcaAchievements = function(_recordNo){
    var that = this;

    this.instance.getCcaCount(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 1; i<=len; i++){
            that.getCcaAchievement(_recordNo, i, function(error, result){
                if (error) {
                    console.log(error)
                }

                $("#myCcas").empty();
                var clubName = result[0];
                var achievementTitle = result[1];
                var points = result[2];
                var ccaTemplate = "<tr><td colspan='2'>" + clubName + "</td><td colspan='2'>" + achievementTitle + "</td><td>" + points + "</td><tr>"
                $("#myCcas").append(ccaTemplate);
            })
        }
    });
}

StudentRecordApp.prototype.showCertAwards = function(_recordNo){
    var that = this;

    this.instance.certListLen(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 0; i<len; i++){
            that.getCertNo(_recordNo, i, function(error, certNo){
                if (error) {
                    console.log(error)
                }

                that.getCertAward(_recordNo, certNo, function(error, result){
                    if (error) {
                        console.log(error)
                    }

                    $("#cert_awards").empty();
                    var certNo = result[0];
                    var certName = result[1];
                    var issuedBy = result[2];
                    var issueDate = result[3];
                    var certAchievement = result[4];
                    var certTemplate = "<tr><td>" + certNo + "</td><td>" + certName + "</td><td>" + issuedBy + "</td><td>" + issueDate + "</td><td>" + certAchievement + "</td><tr>"
                    $("#cert_awards").append(certTemplate);
                })
            });
        }
    });
}

StudentRecordApp.prototype.showMyCertAwards = function(_recordNo){
    var that = this;

    this.instance.certListLen(_recordNo, function(error, len) {
        if (error) {
            console.log(error)
        }

        for (let i = 0; i<len; i++){
            that.getCertNo(_recordNo, i, function(error, certNo){
                if (error) {
                    console.log(error)
                }

                that.getCertAward(_recordNo, certNo, function(error, result){
                    if (error) {
                        console.log(error)
                    }

                    $("#myCertAwards").empty();
                    var certNo = result[0];
                    var certName = result[1];
                    var issuedBy = result[2];
                    var issueDate = result[3];
                    var certAchievement = result[4];
                    var certTemplate = "<tr><td>" + certNo + "</td><td>" + certName + "</td><td>" + issuedBy + "</td><td>" + issueDate + "</td><td>" + certAchievement + "</td><tr>"
                    $("#myCertAwards").append(certTemplate);
                })
            });
        }
    });
}

StudentRecordApp.prototype.showRecord = function(_recordNo){
    var that = this;

    this.getRecord(_recordNo, function(error, result){
        if (error) {
            console.log(error)
        }

        $('#arecord').css('visibility', 'visible');

        $('#tdFullName').text(result[5]);
        $('#tdNric').text(result[6]);
        $('#tdStudentNo').text(result[0]);
        $('#tdPoly').text(result[1]);
        $('#tdSchool').text(result[2]);
        $('#tdCourse').text(result[3]);
        $('#tdStatus').text(result[4]);

        $("#modules").empty();
        $("#ccas").empty();
        $("#cert_awards").empty();

        that.showGrades(_recordNo);
        that.showCcaAchievements(_recordNo);
        that.showCertAwards(_recordNo);
    });
}

StudentRecordApp.prototype.showMyRecord = function(_recordNo){
    var that = this;

    this.getRecord(_recordNo, function(error, result){
        if (error) {
            console.log(error)
        }

        $('#myRecord').css('visibility', 'visible');

        $('#myFullName').text(result[5]);
        $('#myNric').text(result[6]);
        $('#myStudentNo').text(result[0]);
        $('#myPoly').text(result[1]);
        $('#mySchool').text(result[2]);
        $('#myCourse').text(result[3]);
        $('#myStatus').text(result[4]);

        $("#myModules").empty();
        $("#myCcas").empty();
        $("#myCertAwards").empty();

        that.showMyGrades(_recordNo);
        that.showMyCcaAchievements(_recordNo);
        that.showMyCertAwards(_recordNo);
    });
}

// for employers and institution staffs
StudentRecordApp.prototype.viewRecord = function(){
    var that = this;
    var nric = $("#nric").val().toUpperCase();

    $("#astudrecords").empty();
    $('#arecord').css('visibility', 'hidden');

    that.checkNric(nric, function(error, found){
        if (error){
            console.log(error)
        }
        else{
            if (found == true){
                var acctAddress = web3.toChecksumAddress(web3.eth.accounts[0]);
                that.getAuthViewers(nric, acctAddress, function(error, authorised){
                    if(error){
                        console.log(error)
                    }
                    else{
                        if(authorised == true){
                            that.getRecordCount(function(error, recordCount) {
                                if (error) {
                                    console.log(error)
                                }
                                else{
                                    for (let i = 1; i<=recordCount; i++){
                                        that.getRecord(i, function(error, result){
                                            if (error) {
                                                console.log(error)
                                            }

                                            if(result[6] == nric){
                                                var studentNo = result[0];
                                                var polyID = result[1];

                                                var btnId = "showrecord" + i;
                                                var clickbtn = "<button id='"+btnId+"' class='btn btn-default'>Select</button>";
                                                $("#"+btnId).off("click").click(function() { that.showRecord(i); });
                                                $(document).on('click', '#'+btnId , function() {
                                                    that.showRecord(i);
                                                });
                                                var recordTemplate = "<tr><td>" + studentNo + "</td><td>" + polyID + "</td><td>" + clickbtn + "</td><tr>"
                                                $("#astudrecords").append(recordTemplate);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        else{
                            alert("You are not authorised to view this record.")
                        }
                    }
                })
            }
            else{
                alert("NRIC cannot be found.")
            }
        }
    })
}

StudentRecordApp.prototype.checkNric = function (_nric, cb){
    this.instance.checkNric(_nric, function (error, found){
        cb(error, found)
    });
}

StudentRecordApp.prototype.getAuthViewers = function (_nric, _address, cb){
    this.instance.getAuthViewers(_nric, _address ,function (error, authorised){
        cb(error, authorised)
    });
}

StudentRecordApp.prototype.authoriseViewer = function(){
    var that = this;
    var authAddress = $("#authAddress").val();
    var acctAddress = web3.toChecksumAddress(web3.eth.accounts[0]);

    this.instance.authoriseViewer(acctAddress, authAddress,
    { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
    function(error, txHash){
        if(error){
            console.log(error);
        }
        else{
            that.waitForReceipt(txHash, function(receipt) {
                if(receipt.status == 1){
                    $("#authAddress").val("");

                    that.loadStudentRecord();
                }
            });
        }
    });
}

StudentRecordApp.prototype.removeViewer = function(){
    var that = this;
    var authAddress = $("#authAddress").val();
    var acctAddress = web3.toChecksumAddress(web3.eth.accounts[0]);

    this.instance.removeViewer(acctAddress, authAddress,
    { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
    function(error, txHash){
        if(error){
            console.log(error);
        }
        else{
            that.waitForReceipt(txHash, function(receipt) {
                if(receipt.status == 1){
                    $("#authAddress").val("");

                    that.loadStudentRecord();
                }
            });
        }
    });
}

StudentRecordApp.prototype.waitForReceipt = function(hash, cb){
    var that = this;

    this.web3.eth.getTransactionReceipt(hash, function(err, receipt){
        if (err){
            error(err);
        }
        if (receipt != null){
            if (cb){
                cb(receipt);
            }
        } else{
            window.setTimeout(function(){
                that.waitForReceipt(hash, cb);
            }, 2000);
        }
    });
}
