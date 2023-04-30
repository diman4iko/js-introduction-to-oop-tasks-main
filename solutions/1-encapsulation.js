
export let getMutualFriends = (user1, user2) => {
    return user1.getMutualFriends(user2);
};


export default ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getMutualFriends(other) {
        let id_friends_user = other.getFriends().map((el) => el.id);
        return this.getFriends().reduce((previous, curr) => {
            if (id_friends_user.includes(curr.id)) {
                previous.push(curr);
            }
            return previous;
        }, []);
    },
    getFriends() {
        return this.friends.slice();
    },
});
