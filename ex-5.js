// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

/* ให้นำ Function getJohnProfile จากโจทย์ Exercise #2 มาเขียนใหม่ด้วยวิธี Async / Await
ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log() */
// Start coding here
async function johnProfile() {
  try {
    const profile = await getJohnProfile();
    console.log(profile);
  } catch (error) {
    console.log(error);
  }
}

johnProfile();
