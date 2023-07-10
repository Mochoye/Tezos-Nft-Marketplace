class Marketplace(sp.Contract):
    def __init__(self, token, metadata, admin):
        self.init(
            token=token,
            metadata=metadata,
            admin=admin,
            data=sp.big_map(tkey=sp.TNat, tvalue=sp.TRecord(holder=sp.TAddress, author=sp.TAddress, amount=sp.TMutez, token_id=sp.TNat, collectable=sp.TBool)),
            token_id=0,
            )