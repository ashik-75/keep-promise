import BlurImage from "@/components/blur-image";
import { query } from "@/lib/hashnode";
import { PostDetails } from "@/types/post-details.types";
import { format } from "date-fns";
import Image from "next/image";

const PostDetails = async ({
	params,
}: {
	params: {
		slug: string;
		host: string;
	};
}) => {
	console.log(params);
	const { data } = await query<PostDetails>({
		query: `
		query ($host: String!,$slug:String!) {
			publication(host: $host) {
				title
				post(slug:$slug) {
					id
					slug
					title
					coverImage {
						url
					}
					author{
						username
						name
						profilePicture
					}
					views
					content {
						html
					}
					publishedAt
				}
			}
		}
		`,
		variables: {
			slug: params.slug,
			host: params.host,
		},
	});

	if (!data?.publication?.post) {
		return <div>Nothing found in here</div>;
	}

	const { author, content, coverImage, views, title, publishedAt } =
		data.publication.post;
	return (
		<div className="p-5 prose max-w-none space-y-5">
			<BlurImage
				url={coverImage.url}
				className="border not-prose rounded-2xl"
			/>
			<h1>{title}</h1>

			<div className="not-prose flex justify-between">
				<div className="flex gap-5">
					<BlurImage
						className="w-10 h-10 rounded-full"
						url={author.profilePicture}
					/>

					<div>
						<h1 className="text-sm">{author.name}</h1>
						<p>{format(publishedAt, "PPP")}</p>
					</div>
				</div>

				<div>
					Views: <span className="font-bold">{views}</span>
				</div>
			</div>

			<div
				dangerouslySetInnerHTML={{
					__html: content.html,
				}}
			></div>
		</div>
	);
};

export default PostDetails;
