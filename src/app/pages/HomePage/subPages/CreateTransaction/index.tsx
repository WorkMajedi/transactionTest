import React, { FunctionComponent } from 'react';
import Card from '../../../../../components/Card';
import CardHeader from '../../../../../components/Card/component/CardHeader';
import CardBody from '../../../../../components/Card/component/CardBody';
import Input from '../../../../../components/Input';
import TextArea from '../../../../../components/Input/TextArea';
import Select from '../../../../../components/Input/Select';
import CardFooter from '../../../../../components/Card/component/CardFooter';
import Button from '../../../../../components/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import LinkRouter from '../../../../../components/Button/LinkRouter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, expense } from 'store/reducer/WalletReducer';
import { Formik, Field, Form } from 'formik';
interface OwnProps {}

type Props = OwnProps;

export const CreateTransaction: FunctionComponent<Props> = props => {
  const wallet = useSelector((state: any) => state.wallet.Amount);
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      <Card>
        <CardHeader wallet={wallet} />
        <Formik
          initialValues={{ amount: '', Note: '', Date: '', Category: '' }}
          onSubmit={async values => {
            if (values.Category === 'Income') {
              dispatch(increment(values));
            } else if (values.Category === 'Expense') {
              dispatch(expense(values));
            }
            history.push('/transaction/list');
            console.log(values, '-- /////??? --');
          }}
        >
          <Form>
            <CardBody>
              <Field name="amount">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <>
                    <Input title={'Enter amount'} type="number" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="Note">
                {({ field, form: { touched, errors }, meta }) => (
                  <>
                    <TextArea
                      title={'Note'}
                      onChange={e => console.log(e.target.value, '--   --')}
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="Date">
                {({ field, form: { touched, errors }, meta }) => (
                  <>
                    <Input title={'Date'} type="date" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="Category" as="select">
                {({ field, form: { touched, errors }, meta }) => (
                  <Select title={'Category'} {...field}>
                    <option value=""></option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </Select>
                )}
              </Field>
            </CardBody>
            <CardFooter>
              <LinkRouter>
                <Link to={'/transaction/list'}>Cancel</Link>
              </LinkRouter>
              <Button primary type="submit">
                Save Transaction
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </>
  );
};
