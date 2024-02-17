import { Post, Root } from "@/types";
import BlurImage from "./blur-image";
import { format } from "date-fns";
import { sleep } from "@/lib/utils";
import { query } from "@/lib/hashnode";

const PostList = async ({ posts }: { posts: Post[] }) => {
	return (
		<div className="grid grid-cols-3 gap-5 p-5">
			{posts.map((post) => (
				<div key={post.id} className="space-y-3">
					<BlurImage
						className="border"
						url={post?.coverImage?.url || "/404.jpg"}
						alt={post.title}
					/>
					<h1 className="font-black text-zinc-700 text-lg line-clamp-2">
						{post.title}
					</h1>

					<div className="flex gap-2">
						<div className="w-12">
							<BlurImage
								url={post.author.profilePicture}
								className="rounded-full aspect-square"
							/>
						</div>
						<div>
							<p className="font-bold text-sm text-zinc-500">
								{post.author.name}
							</p>
							<p className="text-sm text-slate-500">
								{format(post.publishedAt, "PPP")}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostList;
