import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Pagination() {
	return (
		<div>
			<main className="flex items-center gap-2" aria-label="Pagination">
				{/* 이전 버튼 */}
				<button
					type="button"
					className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
					<span className="sr-only">Previous</span>
					<ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					aria-current="page"
					className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold shadow-sm">
					1
				</button>

				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
					2
				</button>

				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
					3
				</button>

				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
					4
				</button>

				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
					5
				</button>

				{/* 다음 버튼 */}
				<button
					type="button"
					className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
					<span className="sr-only">Next</span>
					<ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
				</button>
			</main>
		</div>
	);
}
