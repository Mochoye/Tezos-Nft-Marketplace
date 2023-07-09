import smartpy as sp

class Nft_one(sp.Contract):
    def __init__(self , address: sp.TAddress, metadata):
        self.init(owner = address , metadata = metadata)

    @sp.entry_point
    def transfer(self , newAddress):
        sp.verify(self.data.owner == sp.sender , "Not the owner")
        self.data.owner =  newAddress


alice = sp.test_account('Alice').address
bob = sp.test_account('Bob').address

@sp.add_test(name="Nft_one")
def test():
    ts1 = sp.test_scenario()
    metadeta = sp.utils.metadata_of_url('https://ipfs.io/ipfs/QmRyZpcYUt2mhxYCiwvHWn5J3EYcWLC5jUaqid6AECwMmc?filename=1316806.jpeg')
    c1 = Nft_one(address = alice, metadata = metadeta)
    ts1 += c1
    c1.transfer(bob).run(alice)
    # sp.verify(c1.data.owner == bob , "Not bob")
    
    
    