// function DisplayPdf({ dataTitle, fileUrl }) {

//     return (
//         // 変数を使って、画像のURLを指定する
//         <object data={`${fileUrl}`} type="application/pdf" width="100%" height="600px" />
//     )
// }

// export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。

import { NextPage } from 'next';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import pdfjsWorkerSrc from '../../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

const PdfPage: NextPage = () => {
    const url = {`${fileUrl}`
}
const [numPages, setNumPages] = React.useState(1);
const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
};

return (
    <div>
        Hello world.pdf
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
            <div style={{ border: 'solid 1px gray', width: 300, height: 300 }}>
                <Page pageNumber={numPages} />
            </div>
        </Document>
    </div>
);
};

export default PdfPage;

