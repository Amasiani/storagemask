<html>
    <ul>
    @foreach ($profit as $profit)
        <li>
            {{ $profit->name }}
            {{ $profit->email }}
        </li>
    @endforeach
    </ul>
</html>