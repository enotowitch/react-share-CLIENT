import React from "react";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon } from "react-share";

export default function SocialMediaButtons(props) {
	return (
		<>
			<FacebookShareButton
				url={window.location.href}
				quote="quote"
				hashtag="hashtag"
			>
				<FacebookIcon size={36} />
			</FacebookShareButton>

			<LinkedinShareButton
				title="title"
				summary="summary"
				source="source"
				url={window.location.href}
				quote="quote"
				hashtag="hashtag"
			>
				<LinkedinIcon size={36} />
			</LinkedinShareButton>

			<TwitterShareButton
				title="title"
				summary="summary"
				source="source"
				url={window.location.href}
				quote="quote"
				hashtag="hashtag"
			>
				<TwitterIcon size={36} />
			</TwitterShareButton>
		</>
	);
}