const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
]

const countComment = (data) => {
  // declare count as zero (number)
  let count = 0
  // check data length
  if (data.length > 0) {
    // plus the count 
    count += data.length
    // make a loop
    data.forEach((element) => {
      // check if replies exist
      if (element.replies) {
        // check replies length
        if (element.replies.length > 0) {
          // plus the count
          count += element.replies.length
          // make a loop again
          element.replies.forEach((element2) => {
            // check if replies exist
            if (element2.replies) {
              // check replies length
              if (element2.replies.length > 0) {
                // plus the count
                count += element2.replies.length
              }
            }
          })
        }
      }
    })
  }
  // return the count
  return count
}
const result = {
  commentCount: countComment(comments)
}
console.log(result)