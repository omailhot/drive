import { FileIcon, Folder as FolderIcon } from "lucide-react";
import Link from "next/link";
import type { folders, files } from "~/server/db/schema";

export function FileRow(props: { file: typeof files.$inferSelect }) {
  const { file } = props;
  return (
    <li
      key={file.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <Link
            href={file.url ?? "#"}
            className="flex items-center text-gray-100 hover:text-blue-400"
						target="_blank"
					>
            <FileIcon className="mr-3" size={20} />
            {file.name}
          </Link>
        </div>
        <div className="col-span-3 text-gray-400">{"file"}</div>
        <div className="col-span-3 text-gray-400">{file.size}</div>
      </div>
    </li>
  );
}

export function FolderRow(props: {
  folder: typeof folders.$inferSelect;
  handleFolderClick: () => void;
}) {
  const { folder, handleFolderClick } = props;
  return (
    <li
      key={folder.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <button
            onClick={() => handleFolderClick()}
            className="flex items-center text-gray-100 hover:text-blue-400"
          >
            <FolderIcon className="mr-3" size={20} />
            {folder.name}
          </button>
        </div>
        <div className="col-span-3 text-gray-400">
					{"folder"}
				</div>
        <div className="col-span-3 text-gray-400">
					{"-"}
				</div>
      </div>
    </li>
  );
}
