import HomeSectionLayout from "./HomeSectionLayout"
import CardCollection from "./CardCollection"
import PostCard from "./PostCard"

export default function PostsSection({ posts }) {
    return (
        <HomeSectionLayout id="post-section">
            <h1>Posts</h1>
            <CardCollection initialCards={4} increment={2} displayDelay={100}>
                {posts.map(post => (
                    <PostCard postInfo={post} key={post.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}