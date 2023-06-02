import React from "react";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

export default function SocialMediaButtons(props) {
	return (
		<>
			<FacebookShareButton
				url={"http://www.123.com"}
				quote={"123 - World is yours to explore"}
				hashtag="#123"
			>
				<FacebookIcon size={36} />
			</FacebookShareButton>

			<LinkedinShareButton
				url={"http://www.123.com"}
				quote={"123 - World is yours to explore"}
				hashtag="#123"
			>
				<LinkedinIcon size={36} />
			</LinkedinShareButton>
		</>
	);
}