import smartpy as sp

class Nft_one(sp.Contract):
    def __init__(self , address: sp.TAddress, metadata):
        self.init(owner = address , metadata = metadata)

    @sp.entry_point
    def transfer(self , newAddress):
        sp.verify(self.data.owner == sp.sender , "Not the owner")
        self.data.owner =  newAddress

