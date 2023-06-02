import React from "react";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon } from "react-share";

export default function SocialMediaButtons(props) {
	return (
		<>
			<FacebookShareButton
				url={"https://www.imgonline.com.ua/examples/random-pixels-big.png"}
				quote="quote"
				hashtag="hashtag"
			>
				<FacebookIcon size={36} />
			</FacebookShareButton>

			<LinkedinShareButton
				title="title"
				summary="summary"
				source="source"
				url={"https://www.imgonline.com.ua/examples/random-pixels-big.png"}
				quote="quote"
				hashtag="hashtag"
			>
				<LinkedinIcon size={36} />
			</LinkedinShareButton>
		</>
	);
}