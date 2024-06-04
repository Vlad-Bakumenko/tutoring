export const checkRole = (req,res,next) => {
    if (!req.user) {
        return res.status(401).json({message: "No authenticated user"})
    }
    if (req.user.role !== "admin") {
        return res.status(403).json({message: "Only admin can perform this operation"})
    }
    next();
}