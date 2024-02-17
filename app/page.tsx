import PostList from "@/components/post-list";
import { query } from "@/lib/hashnode";
import { Await, sleep } from "@/lib/utils";
import { Root } from "@/types";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const Page = async ({
	searchParams,
}: {
	searchParams: {
		[key: string]: string | undefined;
	};
}) => {
	const host = searchParams["host"] || "blog.platformatic.dev";

	const promise = query<Root>({
		query: `query ($host: String!) {
			publication(host: $host) {
				title
				posts(first: 20) {
					edges {
						node {
							id
							title
							views
							coverImage {
								url
							}
							publishedAt,
							author{
								profilePicture,
								username,
								name
							}
						}
					}
				}
			}
		}
    `,
		variables: {
			host,
		},
	});

	if (!host) {
		return <div>Empty things</div>;
	}

	return (
		<div>
			<Suspense
				key={host}
				fallback={
					<div className="min-h-screen flex items-center justify-center">
						<Loader className="animate-spin" size={40} />
					</div>
				}
			>
				<Await promise={promise}>
					{({ data }) => {
						const serialized_posts =
							data?.publication?.posts.edges.map((post) => post.node) || [];

						return <PostList posts={serialized_posts} />;
					}}
				</Await>
			</Suspense>
		</div>
	);
};

export default Page;
