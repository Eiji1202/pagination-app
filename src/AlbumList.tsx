import React from "react";
import "./AlbumList.css";
import { Album } from "./type";

type Props = {
    albums: Album[];
    currentAlbums: Album[];
};

export const AlbumList = (props: Props) => {
    const { albums, currentAlbums } = props;
    return (
        <div className="albumGridWrapper">
            {currentAlbums.map((album) => (
                <div key={album.id}>
                    <img src={album.url} alt="album" />
                </div>
            ))}
        </div>
    );
};
