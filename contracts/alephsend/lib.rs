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
    use ink::env::code_hash;

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

            

            let from = self.env().caller();
            let mut storage_vec: StorageVec<u8> = StorageVec::new();
            for i in 0..tokens.len() {
                  
                  let element_ref = storage_vec.get(i).expect("Index out of bounds");
                  let mut element_vec = StorageVec::new();
                  element_vec.push(*element_ref);

               let _ = PSP22Ref::transfer_from(&tokens[i], from, receivers[i], amounts[i],element_vec);
                
            }
        }
    }
}
