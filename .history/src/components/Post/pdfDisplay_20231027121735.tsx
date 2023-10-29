function DisplayPdf({ dataTitle, fileUrl }) {

    return (
        // 変数を使って、画像のURLを指定する
        <img src={`${fileUrl}`} alt={`${dataTitle}`} />
    )
}

export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。