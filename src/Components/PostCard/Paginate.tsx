import React from 'react';
import Paginator from '../inc/Paginator';

interface PaginateProps {
    currentPage: any
    setCurrentPage: any
    totalPosts: any
    postPerPage: any
}

const Paginate: React.FC<PaginateProps> = ({ currentPage, setCurrentPage, totalPosts, postPerPage }) => {
	const totalPages = Math.ceil(totalPosts / postPerPage);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<Paginator>
			<ul className="pagination">
				<li className={`page-item ${currentPage === 1 && `disabled`}`}>
					<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
						&laquo;
					</button>
				</li>
				{pages.map((page) => (
					<li
						key={page}
						className={`page-item ${page === currentPage && `active`}`}
						onClick={() => setCurrentPage(page)}
					>
						<button className="page-link">{page}</button>
					</li>
				))}
				<li className={`page-item ${currentPage === totalPages && `disabled`}`}>
					<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
						&raquo;
					</button>
				</li>
			</ul>
		</Paginator>
	);
};

export default Paginate;
