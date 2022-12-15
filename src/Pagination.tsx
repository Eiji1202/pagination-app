import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AlbumList } from "./AlbumList";
import "./Pagination.css";
import { Album } from "./type";

type Props = {
    albums: Album[];
};

export const Pagination = (props: Props) => {
    const { albums } = props;

    //各ページ6つのalbumを表示
    const itemsPerPage = 6;

    //各ページの最初の配列の番号を格納する
    const [itemsOffset, setItemsOffset] = useState(0);

    //各ページの最後の配列の番号を格納する
    const endOffset = itemsOffset + itemsPerPage;

    //配列.slice(開始の要素, 終了の要素)
    const currentAlbums = albums.slice(itemsOffset, endOffset);

    //ページ数の取得
    const pageCount = Math.ceil(albums.length / itemsPerPage);

    //ページネーションをクリックしたときの処理
    const handlePageClick = (e: { selected: number }) => {
        // console.log(e.selected);

        const newOffset = (e.selected * itemsPerPage) % albums.length;
        setItemsOffset(newOffset);
    };

    return (
        <div className="albumWrapper">
            <AlbumList albums={albums} currentAlbums={currentAlbums} />
            <div className="paginateWrapper">
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    nextLabel="next >"
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    );
};
