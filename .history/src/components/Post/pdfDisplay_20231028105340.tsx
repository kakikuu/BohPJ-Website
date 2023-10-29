
import ConvertApi from 'convertapi-js';

// Authenticate with your API secret
let convertApi = ConvertApi.auth('your-api-secret');

async function convertPptxToImages(fileInput) {
    // Create parameters
    let params = convertApi.createParams();
    params.add('file', fileInput.files[0]);

    // Convert pptx to pdf (as an intermediate step)
    let pdfResult = await convertApi.convert('pptx', 'pdf', params);

    // Now convert pdf to images
    params = convertApi.createParams();
    params.add('file', new Blob([pdfResult.files[0].data]));
    let imageResult = await convertApi.convert('pdf', 'jpg', params);

    // Get result image URLs
    let imageUrls = imageResult.files.map(file => file.Url);

    return imageUrls;
}

// Usage example
document.getElementById('fileInput').addEventListener('change', async event => {
    const imageUrls = await convertPptxToImages(event.target);
    // Now you can use imageUrls to display images in your web page
});

function DisplayPdf({ dataTitle, fileType, fileUrl }) {
    // pdfとpptxを画像に変換する(スライダーとして表示するためには、画像で表示するのが良さそう)
    // 受け取ったfileTypeから、pptxかPDFかを判定し、画像データに変換する

    return (
        // 変数を使って、画像のURLを指定する
        <object data={`${fileUrl}`} type="application/pdf" width="100%" height="600px" />
    )
}

export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。