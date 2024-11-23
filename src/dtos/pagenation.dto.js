// 예시
export const getReview = async (storeId, query) => {
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, storeId)
  );
};

export const previewReviewResponseDTO = (data) => {
  return { reviewData: null, cursorId: null };
};
