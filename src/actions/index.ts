import db from '../config/database/db'
export async function incrementThumbsUp(post: any) {
    await db.post.update({
        where: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })
}