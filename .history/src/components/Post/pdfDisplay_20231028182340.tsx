import styles from './pdfDisplay.module.css';
function DisplayPdf({ dataTitle, fileUrl }) {
    // pdfとpptxを画像に変換する(スライダーとして表示するためには、画像で表示するのが良さそう)
    // 受け取ったfileTypeから、pptxかPDFかを判定し、画像データに変換する
    return (
        // 変数を使って、画像のURLを指定する
        <div>
            <iframe className={styles.iframe} src={`${fileUrl}`} width="100%" height="600px" />
        </div>
    )
}

export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。