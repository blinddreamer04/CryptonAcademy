class UsersRedisStorage extends RedisStorage {
    public function add(User $item);
    public function update(User $item);
    public function delete(User $item);
}

class PointsMysqlStorage extends MysqlStorage {
    public function add(Point $item);
    public function update(Point $item);
    public function delete(Point $item);
