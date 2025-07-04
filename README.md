1. Hash – The Digital Fingerprint
A hash is a unique string that represents the content of a block.
We use the SHA-256 algorithm to calculate it.

✅ Role:
Ensures data integrity.

Links each block securely to the previous one.

If anything inside a block changes, the hash changes too — instantly exposing tampering.

Nonce – The Puzzle Solver
Nonce stands for “Number Only Used Once”. It’s a number that keeps changing during mining until the hash starts with a certain number of zeros.

✅ Role:
Helps in solving the Proof-of-Work puzzle.

Every time the hash fails to meet difficulty, the nonce is increased.

3. Difficulty – Mining Hardness Level
Difficulty decides how hard it is to mine a block — that is, how many leading zeros the hash must have.

✅ Role:
Slows down mining, keeping block generation consistent.

Higher difficulty = Slower mining = More security

Genesis Block – The First Block
The Genesis Block is the very first block in the blockchain.

✅ Role:
Starts the chain.

It has no previous block, so previousHash is usually '0'.
