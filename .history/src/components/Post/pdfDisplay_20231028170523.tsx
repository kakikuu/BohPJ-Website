
import ConvertApi from 'convertapi-js';

// Authenticate with your API secret
const convertapi = new ConvertApi('b1LlPLzmdEydVLgP');
async function convertPptxToJpeg(fileInput) {
    // Create parameters
    let params = convertapi.createParams();
    params.add('file', fileInput.files[0]);

    if (fileType === 'pptx') {
        // Convert pptx to pdf (as an intermediate step)
        let pdfResult = await convertapi.convert('pptx', 'pdf', params);
    }
    // Now convert pdf to images
    params = convertapi.createParams();
    params.add('file', new Blob([pdfResult.files[0].data]));
    let imageResult = await convertapi.convert('pdf', 'jpg', params);

    // Get result image URLs
    let imageUrls = imageResult.files.map(file => file.Url);

    return imageUrls;
}


function DisplayPdf({ dataTitle, fileType, fileUrl }) {
    // pdfとpptxを画像に変換する(スライダーとして表示するためには、画像で表示するのが良さそう)
    // 受け取ったfileTypeから、pptxかPDFかを判定し、画像データに変換する
    const jpegImgUrl = convertPptxToJpeg(fileUrl)
    return (
        // 変数を使って、画像のURLを指定する
        <object data={`${jpegImgUrl}`} type="application/pdf" width="100%" height="600px" />
    )
}

export default DisplayPdf

// 現状として、複数フィールド間で名前が一意のエンティティの取得には成功した。NewsとWorksのエンティティを同時に取得している可能性がある。
// エンドポイントの指定場所を探して、別々に取得するようにする必要がある。