#![cfg_attr(not(feature = "std"), no_std, no_main)]

use ink::{
    env::{
        call::{build_call, ExecutionInput, FromAccountId, Selector},
        DefaultEnvironment, Error as InkEnvError,
    },
    LangError,
};

use ink::{
    codegen::EmitEvent,
    prelude::{format, string::String},
    reflect::ContractEventBase,
    ToAccountId,
};
use openbrush::contracts::traits::psp22::PSP22Ref;
use scale::alloc::vec::Vec as StorageVec;
#[ink::contract]
mod aleph_send {
    use super::*;

    #[ink(storage)]
    pub struct AlephSend {}

    impl AlephSend {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn multi_transfer(&self, tokens: StorageVec<AccountId>, receivers: StorageVec<AccountId>, amounts: StorageVec<Balance>) {
            assert!(tokens.len() == receivers.len() && receivers.len() == amounts.len(), "Input arrays length mismatch");

            for i in 0..tokens.len() {
                let from = self.env().caller();
                // Perform the transfer logic
            }
        }
    }
}


// #![cfg_attr(not(feature = "std"), no_std, no_main)]


// // Import the generated ERC20 interface
// // use IERC20::ERC20;

// use ink::{
//     env::{
//         call::{build_call, ExecutionInput, FromAccountId, Selector},
//         DefaultEnvironment, Error as InkEnvError,
//     },
//     LangError,
// };

// use ink::{
//     codegen::EmitEvent,
//     prelude::{format, string::String, vec::Vec},
//     reflect::ContractEventBase,
//     storage::Mapping,
//     ToAccountId,
// };
// #[ink::contract]
// mod aleph_send {
//     // use super::ERC20;

//     #[ink(storage)]
//     pub struct AlephSend {}

//     impl AlephSend {
//         #[ink(constructor)]
//         pub fn new() -> Self {
//             Self {}
//         }

//         #[ink(message)]
//         pub fn multi_transfer(&self, tokens: Vec<AccountId>, receivers: Vec<AccountId>, amounts: Vec<Balance>) {
//             assert!(tokens.len() == receivers.len() && receivers.len() == amounts.len(), "Input arrays length mismatch");

//             for i in 0..tokens.len() {
//                 let from = self.env().caller();
//                 // let erc20_instance: ERC20 = FromAccountId::from_account_id(tokens[i]);
//                 // let result = erc20_instance.transfer_from(Self::env().caller(), receivers[i], amounts[i]);

//                 // Check result and handle error, if any
//                 // match result {
//                 //     Ok(_) => { /* Successful transfer */ }
//                 //     Err(_) => { /* Handle error */ }
//                 // }
//             }
//         }
//     }
// }


// // #![cfg_attr(not(feature = "std"), no_std, no_main)]

// // #[ink::contract]
// // mod mytoken {
// //     use ink::storage::Mapping;

// //     #[ink(storage)]
// //     #[derive(Default)]
// //     pub struct Mytoken {
// //         total_supply: Balance,
// //         balances: Mapping<AccountId, Balance>,
// //     }

// //     #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
// //     #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
// //     pub enum Error {
// //         InsufficientBalance,
// //     }

// //     impl Mytoken {
// //         #[ink(constructor)]
// //         pub fn new(total_supply: Balance) -> Self {
// //             let mut balances = Mapping::default();
// //             let caller = Self::env().caller();
// //             balances.insert(caller, &total_supply);
// //             Self {
// //                 total_supply,
// //                 balances,
// //             }
// //         }

// //         #[ink(message)]
// //         pub fn total_supply(&self) -> Balance {
// //             self.total_supply
// //         }

// //         #[ink(message)]
// //         pub fn balance_of(&self, owner: AccountId) -> Balance {
// //             self.balances.get(owner).unwrap_or_default()
// //         }

// //         #[ink(message)]
// //         pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<(), Error> {
// //             let from = self.env().caller();
// //             let from_balance = self.balance_of(from);
// //             if from_balance < value {
// //                 return Err(Error::InsufficientBalance);
// //             }

// //             self.balances.insert(from, &(from_balance - value));
// //             let to_balance = self.balance_of(to);
// //             self.balances.insert(to, &(to_balance + value));
// //             Ok(())
// //         }
// //     }

// //     #[cfg(test)]
// //     mod tests {
// //         use super::*;

// //         #[ink::test]
// //         fn total_supply_works() {
// //             let mytoken = Mytoken::new(100);
// //             assert_eq!(mytoken.total_supply(), 100);
// //         }

// //         #[ink::test]
// //         fn balance_of_works() {
// //             let mytoken = Mytoken::new(100);
// //             let accounts =
// //                 ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
// //             assert_eq!(mytoken.balance_of(accounts.alice), 100);
// //             assert_eq!(mytoken.balance_of(accounts.bob), 0);
// //         }

// //         #[ink::test]
// //         fn transfer_works() {
// //             let mut mytoken = Mytoken::new(100);
// //             let accounts =
// //                 ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();

// //             assert_eq!(mytoken.balance_of(accounts.bob), 0);
// //             assert_eq!(mytoken.transfer(accounts.bob, 10), Ok(()));
// //             assert_eq!(mytoken.balance_of(accounts.bob), 10);
// //         }
// //     }
// // }