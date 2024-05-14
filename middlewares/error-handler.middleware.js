export default (err, req, res, next) => {
  console.log('에러처리 미들웨어가 실행되었습니다.');
  console.error(err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ errorMessage: err.message });
  }
  return res //조이 에러가 아닌 에상치 못한 에러
    .status(500)
    .json({ errorMessage: '서버에서 에러가 발생했습니다.' });
};

// 에러처리 미들웨어에서 통합적으로 처리했다.
