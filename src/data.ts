import PEANUT_ABI_V3 from './data/peanutAbiV3.json'
import PEANUT_ABI_V4 from './data/peanutAbiV4.json'
import PEANUT_ABI_V5 from './data/peanutAbiV5.json'
import PEANUT_BATCHER_ABI_V4 from './data/peanutBatcherV4.abi.json'
import ERC20_ABI from './data/erc20abi.json'
import ERC721_ABI from './data/erc721abi.json'
import ERC1155_ABI from './data/erc1155abi.json'
import PEANUT_CONTRACTS from './data/contracts.json'
import CHAIN_MAP from './data/chainMap.json'
import CHAIN_DETAILS from './data/chainDetails.json'
import TOKEN_DETAILS from './data/tokenDetails.json'
const VERSION = 'v5'

// CONSTANTS
const TOKEN_TYPES = Object.freeze({
	ETH: 0,
	ERC20: 1,
	ERC721: 2,
	ERC1155: 3,
})

const LATEST_STABLE_CONTRACT_VERSION = 'v4'
const LATEST_STABLE_BATCHER_VERSION = 'Bv4'

// export all these functions (imported in index.js)
export {
	PEANUT_ABI_V3,
	PEANUT_ABI_V4,
	PEANUT_ABI_V5,
	PEANUT_BATCHER_ABI_V4,
	PEANUT_CONTRACTS,
	ERC20_ABI,
	ERC721_ABI,
	ERC1155_ABI,
	CHAIN_MAP,
	CHAIN_DETAILS,
	TOKEN_DETAILS,
	VERSION,
	TOKEN_TYPES,
	LATEST_STABLE_CONTRACT_VERSION,
	LATEST_STABLE_BATCHER_VERSION,
}
