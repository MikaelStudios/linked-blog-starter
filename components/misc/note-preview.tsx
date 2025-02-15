type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-w-[400px] rounded shadow-sm p-5 bg-white cursor-pointer text-lg hover:bg-gray-200 hover:border-transparent dark:bg-gray-700 dark:hover:bg-gray-600">
      <span className="block font-bold leading-snug tracking-tight truncate mb-1 dark:text-white">{title}</span>
      <span className="block font-normal text-gray-600 whitespace-pre-line max-h-[150px] truncate dark:text-gray-400">{content}</span>
    </span>
  )
}

export default NotePreview