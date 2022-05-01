import {
  LearnWeb3GraduatesNFT,
  TransferSingle,
} from "../generated/LearnWeb3GraduatesNFT/LearnWeb3GraduatesNFT"
import { Badge } from "../generated/schema"

export function handleTransferSingle(event: TransferSingle): void {
  let entity = Badge.load(event.params.to.toHexString().concat('-').concat(event.params.id.toString()));

  if (!entity) {
    entity = new Badge(event.params.to.toHexString().concat('-').concat(event.params.id.toString()))
  }

  let nftContract = LearnWeb3GraduatesNFT.bind(event.address)
  entity.operator = event.params.operator;
  entity.userAddress = event.params.to;
  entity.tokenId = event.params.id;
  entity.tokenUri = nftContract.uri(event.params.id);
  entity.timestamp = event.block.timestamp;

  entity.save()
}
