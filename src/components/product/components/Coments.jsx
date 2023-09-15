import { commentData } from "../../../utils/fakeComments"

export const Comments = () => {


  const randomNumber = Math.floor(Math.random() * (commentData.length - 1 + 1) + 1)
  
  return (
    <div className="border-t mt-2  border-[#ccc] font-semibold">
      <h2 className="text-lg">Yorumlar ({randomNumber - 1 }) </h2>
      {commentData?.slice(1, randomNumber)?.map(comment => (
        <div key={comment?.id} className="mx-1  rounded mb-2 border bg-[#eee] shadow-md w-full px-1 py-2">
          <div className="flex gap-1 items-center pb-1">
            <img className="rounded-full w-6 h-6 border border-black " src={comment?.avatarURL} alt={comment?.username} />
            <h3 className="text-xs">{comment?.username}</h3>
          </div>
          <p className="text-xs"> {comment?.text} </p>
        </div>
      ))}
    </div>
  )
}
