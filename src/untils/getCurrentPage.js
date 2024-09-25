export const getCurrentPage = (query, context) => {
    const currentPage = query.get("page");
    return currentPage ? currentPage : context?.page || 1;
}