import { Post, Root } from "@/types";
import BlurImage from "./blur-image";
import { format } from "date-fns";
import { sleep } from "@/lib/utils";
import { query } from "@/lib/hashnode";
import Link from "next/link";

const PostList = async ({ posts, host }: { posts: Post[]; host: string }) => {
	return (
		<div className="grid grid-cols-3 gap-5 p-5">
			{posts.map((post) => (
				<div key={post.id} className="space-y-3">
					<Link href={`${host}/${post.slug}`}>
						<BlurImage
							className="border rounded-xl"
							url={post?.coverImage?.url || "/404.jpg"}
							alt={post.title}
						/>
					</Link>
					<div className="space-y-2">
						<Link href={`${host}/${post.slug}`}>
							<h1 className="font-bold text-zinc-700 line-clamp-2">
								{post.title}
							</h1>
						</Link>
						<div className="flex gap-2">
							<div className="w-12">
								<BlurImage
									url={post.author.profilePicture}
									className="rounded-full w-10 h-10"
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
				</div>
			))}
		</div>
	);
};

export default PostList;
