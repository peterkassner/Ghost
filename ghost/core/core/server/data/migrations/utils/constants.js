/**
 * Get the owner user ID for migrations
 * Falls back to null if no owner is found (should not happen in normal operation)
 */
async function getOwnerUserId(connection) {
    try {
        const [{id: ownerId} = {id: null}] = await connection('users')
            .select('users.id')
            .innerJoin('roles_users', 'users.id', 'roles_users.user_id')
            .innerJoin('roles', 'roles.id', 'roles_users.role_id')
            .where('roles.name', 'Owner')
            .limit(1);
        
        return ownerId;
    } catch (error) {
        // Fallback to null if query fails
        return null;
    }
}

module.exports = {
    MIGRATION_USER: 1, // Deprecated: kept for backward compatibility with older migrations
    getOwnerUserId
};
