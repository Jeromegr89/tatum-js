export const abi = [
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'feeRecipient',
                'type': 'address'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'ListingCancelled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'ListingCreated',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'buyer',
                'type': 'address'
            }
        ],
        'name': 'ListingSold',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'buyAssetFromListing',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'cancelListing',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'seller',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'createListing',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'getListing',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'listingId',
                        'type': 'string'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isErc721',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'enum MarketplaceListing.State',
                        'name': 'state',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'nftAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'seller',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'erc20Address',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'price',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'buyer',
                        'type': 'address'
                    }
                ],
                'internalType': 'struct MarketplaceListing.Listing',
                'name': '',
                'type': 'tuple'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getMarketplaceFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getMarketplaceFeeRecipient',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            }
        ],
        'name': 'setMarketplaceFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            }
        ],
        'name': 'setMarketplaceFeeRecipient',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
]
export const data = '0x60806040523480156200001157600080fd5b506040516200281f3803806200281f8339810160408190526200003491620000b9565b600062000040620000b5565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600291909155600380546001600160a01b0319166001600160a01b03909216919091179055620000f6565b3390565b60008060408385031215620000cc578182fd5b825160208401519092506001600160a01b0381168114620000eb578182fd5b809150509250929050565b61271980620001066000396000f3fe6080604052600436106100e15760003560e01c80638da5cb5b1161007f57806399fbba611161005957806399fbba6114610233578063bc197c8114610253578063f23a6e6114610273578063f2fde38b14610293576100e8565b80638da5cb5b146101de5780639407ea98146101f3578063943f226114610213576100e8565b80634ae9ec30116100bb5780634ae9ec30146101675780634ffa2be214610194578063715018a6146101b657806389508b27146101cb576100e8565b8063150b7a02146100ed5780631e2ea2a31461012357806326a7b37b14610145576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004611aeb565b6102b3565b60405161011a9190611ef6565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004611a02565b6102c3565b005b34801561015157600080fd5b5061015a61032d565b60405161011a9190612555565b34801561017357600080fd5b50610187610182366004611bd8565b610333565b60405161011a9190612494565b3480156101a057600080fd5b506101a96104ba565b60405161011a9190611e53565b3480156101c257600080fd5b506101436104c9565b6101436101d9366004611c13565b610552565b3480156101ea57600080fd5b506101a9610e19565b3480156101ff57600080fd5b5061014361020e366004611d08565b610e28565b34801561021f57600080fd5b5061014361022e366004611bd8565b610e6c565b34801561023f57600080fd5b5061014361024e366004611c63565b6112d8565b34801561025f57600080fd5b5061010d61026e366004611a41565b6116a1565b34801561027f57600080fd5b5061010d61028e366004611b55565b6116b2565b34801561029f57600080fd5b506101436102ae366004611a02565b6116c3565b630a85bd0160e11b949350505050565b6102cb611783565b6001600160a01b03166102dc610e19565b6001600160a01b03161461030b5760405162461bcd60e51b815260040161030290612232565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60025490565b61033b611828565b60018260405161034b9190611d99565b90815260200160405180910390206040518061014001604052908160008201805461037590612656565b80601f01602080910402602001604051908101604052809291908181526020018280546103a190612656565b80156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b5050509183525050600182015460ff8082161515602084015260409092019161010090910416600281111561043357634e487b7160e01b600052602160045260246000fd5b600281111561045257634e487b7160e01b600052602160045260246000fd5b815260018201546201000090046001600160a01b03908116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e09091015292915050565b6003546001600160a01b031690565b6104d1611783565b6001600160a01b03166104e2610e19565b6001600160a01b0316146105085760405162461bcd60e51b815260040161030290612232565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60006001836040516105649190611d99565b90815260200160405180910390206040518061014001604052908160008201805461058e90612656565b80601f01602080910402602001604051908101604052809291908181526020018280546105ba90612656565b80156106075780601f106105dc57610100808354040283529160200191610607565b820191906000526020600020905b8154815290600101906020018083116105ea57829003601f168201915b5050509183525050600182015460ff8082161515602084015260409092019161010090910416600281111561064c57634e487b7160e01b600052602160045260246000fd5b600281111561066b57634e487b7160e01b600052602160045260246000fd5b815260018201546001600160a01b03620100009091048116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e09091015290506000816040015160028111156106f557634e487b7160e01b600052602160045260246000fd5b1461072257341561070a5761070a3334611787565b60405162461bcd60e51b815260040161030290612267565b8060200151156107ed57606081015160c08201516040516331a9108f60e11b815230926001600160a01b031691636352211e916107629190600401612555565b60206040518083038186803b15801561077a57600080fd5b505afa15801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b29190611a25565b6001600160a01b0316146107e85734156107d0576107d03334611787565b60405162461bcd60e51b8152600401610302906121a1565b6108a5565b8060e0015181606001516001600160a01b031662fdd58e308460c001516040518363ffffffff1660e01b8152600401610827929190611edd565b60206040518083038186803b15801561083f57600080fd5b505afa158015610853573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108779190611d20565b10156108a557341561088d5761088d3334611787565b60405162461bcd60e51b8152600401610302906123f4565b816001600160a01b03168160a001516001600160a01b0316146108ea5734156108d2576108d23334611787565b60405162461bcd60e51b8152600401610302906122ab565b600061271060025483610100015161090291906125f0565b61090c91906125d0565b600160408481018290523361012086015251919250839161092e908790611d99565b9081526020016040518091039020600082015181600001908051906020019061095892919061187c565b50602082015160018201805460ff1916911515919091178082556040840151919061ff0019166101008360028111156109a157634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a080850151600385018054841691851691909117905560c0850151600485015560e0850151600585015561010085015160068501556101209094015160079093018054909116928216929092179091559083015116610b01573481836101000151610a5c91906125b8565b1115610a8a573415610a7257610a723334611787565b60405162461bcd60e51b815260040161030290612360565b600354610aa0906001600160a01b031682611787565b610ab38260800151836101000151611787565b60008183610100015134610ac7919061260f565b610ad1919061260f565b1115610afc57610afc338284610100015134610aed919061260f565b610af7919061260f565b611787565b610ce8565b60a0820151604051636eb1769f60e11b81526001600160a01b0382169063dd62ed3e90610b349033903090600401611e67565b60206040518083038186803b158015610b4c57600080fd5b505afa158015610b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b849190611d20565b82846101000151610b9591906125b8565b1115610bc3573415610bab57610bab3334611787565b60405162461bcd60e51b815260040161030290611f68565b6003546040516323b872dd60e01b81526001600160a01b03808416926323b872dd92610bf792339216908790600401611e81565b602060405180830381600087803b158015610c1157600080fd5b505af1158015610c25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c499190611bbc565b5060808301516101008401516040516323b872dd60e01b81526001600160a01b038416926323b872dd92610c839233929190600401611e81565b602060405180830381600087803b158015610c9d57600080fd5b505af1158015610cb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd59190611bbc565b503415610ce657610ce63334611787565b505b816020015115610d6257606082015160c0830151604051632142170760e11b81526001600160a01b03909216916342842e0e91610d2b9130913391600401611e81565b600060405180830381600087803b158015610d4557600080fd5b505af1158015610d59573d6000803e3d6000fd5b50505050610dd3565b81606001516001600160a01b031663f242432a30338560c001518660e001516040518563ffffffff1660e01b8152600401610da09493929190611ea5565b600060405180830381600087803b158015610dba57600080fd5b505af1158015610dce573d6000803e3d6000fd5b505050505b6040513390610de3908690611d99565b604051908190038120907fe7250216b7511d32ca1a0141f8d5cc775bd04f9c749b54b0c6c1cb1e1c4ff52e90600090a350505050565b6000546001600160a01b031690565b610e30611783565b6001600160a01b0316610e41610e19565b6001600160a01b031614610e675760405162461bcd60e51b815260040161030290612232565b600255565b6000600182604051610e7e9190611d99565b908152602001604051809103902060405180610140016040529081600082018054610ea890612656565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed490612656565b8015610f215780601f10610ef657610100808354040283529160200191610f21565b820191906000526020600020905b815481529060010190602001808311610f0457829003601f168201915b5050509183525050600182015460ff80821615156020840152604090920191610100909104166002811115610f6657634e487b7160e01b600052602160045260246000fd5b6002811115610f8557634e487b7160e01b600052602160045260246000fd5b815260018201546001600160a01b03620100009091048116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e090910152905060008160400151600281111561100f57634e487b7160e01b600052602160045260246000fd5b1461102c5760405162461bcd60e51b81526004016103029061200b565b60808101516001600160a01b031633148061105f575061104a610e19565b6001600160a01b0316336001600160a01b0316145b61107b5760405162461bcd60e51b8152600401610302906120eb565b6002604082018181525050806001836040516110979190611d99565b908152602001604051809103902060008201518160000190805190602001906110c192919061187c565b50602082015160018201805460ff1916911515919091178082556040840151919061ff00191661010083600281111561110a57634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a0840151600384018054831691841691909117905560c0840151600484015560e08401516005840155610100840151600684015561012090930151600790920180549093169116179055602081015115611221576060810151608082015160c0830151604051632142170760e11b81526001600160a01b03909316926342842e0e926111ea923092600401611e81565b600060405180830381600087803b15801561120457600080fd5b505af1158015611218573d6000803e3d6000fd5b50505050611296565b80606001516001600160a01b031663f242432a3083608001518460c001518560e001516040518563ffffffff1660e01b81526004016112639493929190611ea5565b600060405180830381600087803b15801561127d57600080fd5b505af1158015611291573d6000803e3d6000fd5b505050505b816040516112a49190611d99565b604051908190038120907fff1b3c121274b35b78cfc6a06d69993757efa24b0a666779050b1266aade87c690600090a25050565b876040516020016112e99190611d99565b6040516020818303038152906040528051906020012060018960405161130f9190611d99565b9081526040516020918190038201812061132b92909101611db5565b60405160208183030381529060405280519060200120141561135f5760405162461bcd60e51b8152600401610302906123a6565b86611412576000821161137157600080fd5b604051627eeac760e11b815282906001600160a01b0388169062fdd58e9061139f9087908a90600401611edd565b60206040518083038186803b1580156113b757600080fd5b505afa1580156113cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ef9190611d20565b101561140d5760405162461bcd60e51b815260040161030290611f0b565b6114be565b826001600160a01b0316866001600160a01b0316636352211e876040518263ffffffff1660e01b81526004016114489190612555565b60206040518083038186803b15801561146057600080fd5b505afa158015611474573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114989190611a25565b6001600160a01b0316146114be5760405162461bcd60e51b815260040161030290612156565b6040805161014081018252898152881515602082015260008183018190526001600160a01b03808a1660608401528681166080840152841660a083015260c0820188905260e08201859052610100820187905261012082015290518190600190611529908c90611d99565b9081526020016040518091039020600082015181600001908051906020019061155392919061187c565b50602082015160018201805460ff1916911515919091178082556040840151919061ff00191661010083600281111561159c57634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a0840151600384018054831691841691909117905560c0840151600484015560e0840151600584015561010084015160068401556101209093015160079092018054909316918116919091179091556040519088169089151590611651908c90611d99565b60405180910390207f1186ddd131abcdb1bd48f735fad4ef1e2753ebf190acf3159f6c1808fb1d410589878a8860405161168e949392919061255e565b60405180910390a4505050505050505050565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b6116cb611783565b6001600160a01b03166116dc610e19565b6001600160a01b0316146117025760405162461bcd60e51b815260040161030290612232565b6001600160a01b0381166117285760405162461bcd60e51b815260040161030290611fc5565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b804710156117a75760405162461bcd60e51b8152600401610302906120b4565b6000826001600160a01b0316826040516117c090611e50565b60006040518083038185875af1925050503d80600081146117fd576040519150601f19603f3d011682016040523d82523d6000602084013e611802565b606091505b50509050806118235760405162461bcd60e51b815260040161030290612057565b505050565b6040805161014081018252606081526000602082018190529091820190815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e09091015290565b82805461188890612656565b90600052602060002090601f0160209004810192826118aa57600085556118f0565b82601f106118c357805160ff19168380011785556118f0565b828001600101855582156118f0579182015b828111156118f05782518255916020019190600101906118d5565b506118fc929150611900565b5090565b5b808211156118fc5760008155600101611901565b600082601f830112611925578081fd5b8135602067ffffffffffffffff821115611941576119416126a7565b80820261194f828201612582565b838152828101908684018388018501891015611969578687fd5b8693505b8584101561198b57803583526001939093019291840191840161196d565b50979650505050505050565b600082601f8301126119a7578081fd5b813567ffffffffffffffff8111156119c1576119c16126a7565b6119d4601f8201601f1916602001612582565b8181528460208386010111156119e8578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611a13578081fd5b8135611a1e816126bd565b9392505050565b600060208284031215611a36578081fd5b8151611a1e816126bd565b600080600080600060a08688031215611a58578081fd5b8535611a63816126bd565b94506020860135611a73816126bd565b9350604086013567ffffffffffffffff80821115611a8f578283fd5b611a9b89838a01611915565b94506060880135915080821115611ab0578283fd5b611abc89838a01611915565b93506080880135915080821115611ad1578283fd5b50611ade88828901611997565b9150509295509295909350565b60008060008060808587031215611b00578384fd5b8435611b0b816126bd565b93506020850135611b1b816126bd565b925060408501359150606085013567ffffffffffffffff811115611b3d578182fd5b611b4987828801611997565b91505092959194509250565b600080600080600060a08688031215611b6c578081fd5b8535611b77816126bd565b94506020860135611b87816126bd565b93506040860135925060608601359150608086013567ffffffffffffffff811115611bb0578182fd5b611ade88828901611997565b600060208284031215611bcd578081fd5b8151611a1e816126d5565b600060208284031215611be9578081fd5b813567ffffffffffffffff811115611bff578182fd5b611c0b84828501611997565b949350505050565b60008060408385031215611c25578182fd5b823567ffffffffffffffff811115611c3b578283fd5b611c4785828601611997565b9250506020830135611c58816126bd565b809150509250929050565b600080600080600080600080610100898b031215611c7f578283fd5b883567ffffffffffffffff811115611c95578384fd5b611ca18b828c01611997565b9850506020890135611cb2816126d5565b96506040890135611cc2816126bd565b9550606089013594506080890135935060a0890135611ce0816126bd565b925060c0890135915060e0890135611cf7816126bd565b809150509295985092959890939650565b600060208284031215611d19578081fd5b5035919050565b600060208284031215611d31578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60038110611d6957634e487b7160e01b600052602160045260246000fd5b9052565b60008151808452611d85816020860160208601612626565b601f01601f19169290920160200192915050565b60008251611dab818460208701612626565b9190910192915050565b8154600090819060028104600180831680611dd157607f831692505b6020808410821415611df157634e487b7160e01b87526022600452602487fd5b818015611e055760018114611e1657611e42565b60ff19861689528489019650611e42565b611e1f8a6125ac565b885b86811015611e3a5781548b820152908501908301611e21565b505084890196505b509498975050505050505050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b60208082526038908201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660408201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606082015260800190565b6020808252603e908201527f496e73756666696369656e7420455243323020616c6c6f77616e63652062616c60408201527f616e636520666f7220706179696e6720666f72207468652061737365742e0000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602c908201527f4c697374696e67206973206e6f7420696e20494e49544941544544207374617460408201526b32971020b137b93a34b7339760a11b606082015260800190565b6020808252603a908201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260408201527f6563697069656e74206d61792068617665207265766572746564000000000000606082015260800190565b6020808252601d908201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604082015260600190565b60208082526045908201527f4c697374696e672063616e27742062652063616e63656c6c65642066726f6d2060408201527f6f74686572207468656e2073656c6c6572206f72206f776e65722e2041626f726060820152643a34b7339760d91b608082015260a00190565b6020808252602b908201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060408201526a3a34329030baba3437b91760a91b606082015260800190565b60208082526065908201527f4173736574206973206e6f74206f776e65642062792074686973206c6973746960408201527f6e672e2050726f6261626c7920776173206e6f742073656e7420746f2074686560608201527f20736d61727420636f6e74726163742c206f722077617320616c72656164792060808201526439b7b6321760d91b60a082015260c00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526024908201527f4c697374696e6720697320696e2077726f6e672073746174652e2041626f727460408201526334b7339760e11b606082015260800190565b60208082526083908201527f455243323020746f6b656e20616464726573732061732061207061796572206d60408201527f6574686f642073686f756c64206265207468652073616d6520617320696e207460608201527f6865206c697374696e672e20456974686572206c697374696e672c206f72206d60808201527f6574686f642063616c6c206861732077726f6e6720455243323020616464726560a08201526239b99760e91b60c082015260e00190565b60208082526026908201527f496e73756666696369656e74207072696365207061696420666f72207468652060408201526530b9b9b2ba1760d11b606082015260800190565b6020808252602e908201527f4c697374696e6720616c7265616479206578697374656420666f72206375727260408201526d195b9d081b1a5cdd1a5b99c8125960921b606082015260800190565b60208082526074908201527f496e73756666696369656e742062616c616e6365206f6620746865206173736560408201527f7420696e2074686973206c697374696e672e2050726f6261626c79207761732060608201527f6e6f742073656e7420746f2074686520736d61727420636f6e74726163742c2060808201527337b9103bb0b99030b63932b0b23c9039b7b6321760611b60a082015260c00190565b60006020825282516101408060208501526124b3610160850183611d6d565b915060208501516124c76040860182611d45565b5060408501516124da6060860182611d4b565b5060608501516124ed6080860182611d38565b50608085015161250060a0860182611d38565b5060a085015161251360c0860182611d38565b5060c085015160e085810191909152850151610100808601919091528501516101208086019190915285015161254b82860182611d38565b5090949350505050565b90815260200190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b60405181810167ffffffffffffffff811182821017156125a4576125a46126a7565b604052919050565b60009081526020902090565b600082198211156125cb576125cb612691565b500190565b6000826125eb57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561260a5761260a612691565b500290565b60008282101561262157612621612691565b500390565b60005b83811015612641578181015183820152602001612629565b83811115612650576000848401525b50505050565b60028104600182168061266a57607f821691505b6020821081141561268b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146126d257600080fd5b50565b80151581146126d257600080fdfea264697066735822122097d00f492e66602a602eea5bb33615376b45f474bc55e3d33174ca593e70f55564736f6c63430008000033';