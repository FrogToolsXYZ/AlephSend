#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod contracts {

    use ink::{storage::Mapping};


    #[ink(storage)]
    pub struct Contracts {

        admin : AccountId,
        paused : bool,
        sender_count: Mapping<AccountId, Balance>,

    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        InsufficientBalance,
    }

    impl Contracts {


        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { admin : Self::env().caller(), paused: init_value, sender_count : Mapping::default() }
        }


        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        #[ink(message)]
        pub fn call_transfer(&self, to: AccountId, value: Balance) {

            
        }

        #[ink(message)]
        pub fn set_owner(&mut self, new_owner: AccountId) {
            self.admin = new_owner
        }

        //TODO:  add admin modifier to this
        #[ink(message)]
        pub fn flip(&mut self) {
           
        }

        // Done
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.paused
        }


    }

}
