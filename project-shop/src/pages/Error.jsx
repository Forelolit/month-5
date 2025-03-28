import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div style={{ display: 'flex', minHeight: '90vh', justifyContent: 'center', alignItems: 'center' }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>
    );
};
