function Post({ workstitle, workoverview }) {

    return (
        <div className="postData">
            {/* <img alt={workstitle} src={`https:${slidedata.file}`} /> */}
            {/* <div className="description">{workstitle}</div> */}
            <div className="text">
                <h2>{workstitle}</h2>
                <h3>{workoverview}</h3>
            </div>
        </div>
    )
}

export default Post

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。