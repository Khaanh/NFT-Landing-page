import React from "react";
import NftCard from "./Helper/NftCard";

const PopularNft = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] bg-blue-950">
			<div className="text-center">
				<p className="heading__mini">Popular Item</p>
				<h1 className="heading__primary">
					Explor <span className="text-yellow-300">popular</span> Nfts
				</h1>
			</div>

			<div className="w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
				<div>
					<NftCard
						image="/images/nft1.svg"
						title="Warrior"
						author="sajal"
						price="3.25"
					/>
				</div>
				<div>
					<NftCard
						image="/images/nft2.svg"
						title="Meata Ported"
						author="sajal"
						price="4.25"
					/>
				</div>
				<div>
					<NftCard
						image="/images/nft3.svg"
						title="Meata Ported"
						author="sajal"
						price="5.25"
					/>
				</div>
				<div>
					<NftCard
						image="/images/nft4.svg"
						title="Meata Ported"
						author="sajal"
						price="5.25"
					/>
				</div>
				<div>
					<NftCard
						image="/images/nft5.svg"
						title="Meata Ported"
						author="sajal"
						price="5.25"
					/>
				</div>
				<div>
					<NftCard
						image="/images/nft6.svg"
						title="Meata Ported"
						author="sajal"
						price="5.25"
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularNft;
