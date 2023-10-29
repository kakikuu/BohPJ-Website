function DisplayPdf({ dataTitle, fileUrl }) {

    return (
        // 変数を使って、画像のURLを指定する
        <object data={`${fileUrl}`} type="application/pdf" width="100%" height="600px" />
    )
}

export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// ... other imports

function DisplayPdf({ dataTitle, fileUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file="https://assets.ctfassets.net/lzs9okm7hyle/4WXfWthA27qtj3dWKyCwDz/fba181c4b4379922c30b7444b67ae0d6/____.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default MyApp;
