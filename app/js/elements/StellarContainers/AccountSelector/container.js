import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import { createTestAccount, setAccount } from '../../../actions-creators/account';

import {
  getFormValues,
} from 'redux-form'


import AccountSelector from './component';
import {
  isAccountLoading,
  isCreatingTestAccount,
  getAccountError,
  getKeypair,
  canSign,
} from '../../../selectors/account';
import {
  getNetwork,
} from '../../../selectors/stellarData';

const FORM_NAME = 'account-selector';

const mapStateToProps = state => ({
  isAccountLoading: isAccountLoading(state),
  isCreatingTestAccount: isCreatingTestAccount(state),
  canSign: canSign(state),
  error: getAccountError(state),
  keypair: getKeypair(state),
  network: getNetwork(state),

  values: getFormValues(FORM_NAME)(state) || {}, // WHY object ?
});

const mapDispatchToProps = { setAccount, createTestAccount };

export default reduxForm({
  form: FORM_NAME, // a unique name for this form
})(connect(mapStateToProps, mapDispatchToProps)(AccountSelector));
