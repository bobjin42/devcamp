// @desc    Get all bootcamps
//@route    Get /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Show all bootcamps" });
};

// @desc    Get single bootcamp
//@route    Get /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Display bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamps
//@route    Post /api/v1/bootcamps
//@access   Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Create new bootcamps" });
};

// @desc    Update bootcamp
//@route    Put /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc    Delete bootcamp
//@route    Delete /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
};
