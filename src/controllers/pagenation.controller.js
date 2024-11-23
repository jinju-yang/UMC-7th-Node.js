export const handleListStoreReviews = async (req, res, next) => {
  const reviews = await listStoreReviews(req.params.storeId);
  res.status(StatusCodes.OK).success(reviews);
};
