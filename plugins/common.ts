// import { google } from 'googleapis';
// import Vue from 'vue';

// export default Vue.extend({
//   methods: {
//     // スプレッドシート認証用
//     async getJwtClient() {
//       const clientEmail = process.env.CLIENT_EMAIL;
//       const privateKey = process.env.PRIVATE_KEY;
//       const jwtClient = new google.auth.JWT(clientEmail, undefined, privateKey, [
//         'https://www.googleapis.com/auth/spreadsheets',
//         'https://www.googleapis.com/auth/drive',
//       ]);
//       // eslint-disable-next-line
//       console.log(jwtClient)
//       try {
//         await jwtClient.authorize();
//         return jwtClient;
//       } catch (error) {
//         // eslint-disable-next-line
//         console.error(`getJwtClient is failed: ${error}`)
//       }
//       return false;
//     },
//     // スプレッドシート取得
//     async getSpreadSheet(id: string | undefined, cell: string | undefined) {
//       const sheets = google.sheets('v4');
//       try {
//         const jwtClient = await this.getJwtClient();
//         if (!jwtClient) {
//           return;
//         }
//         const res = await sheets.spreadsheets.values.get({
//           auth: jwtClient,
//           spreadsheetId: id,
//           range: cell,
//         });
//         return res.data.values;
//       } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error(`getSpreadSheet is failed.: ${error}`);
//       }
//     },
//   },
// });
