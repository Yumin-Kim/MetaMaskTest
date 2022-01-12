import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NetworksListItem from '../networks-list-item';
import { NETWORK_TYPE_RPC } from '../../../../../shared/constants/network';

const NetworksList = ({
  networkIsSelected,
  networksToRender,
  networkDefaultedToProvider,
  selectedRpcUrl,
}) => {
  return (
    <div
      className={classnames('networks-tab__networks-list', {
        'networks-tab__networks-list--selection':
          networkIsSelected && !networkDefaultedToProvider,
      })}
    >
      {networksToRender.map((network) => {
        if (network.providerType === NETWORK_TYPE_RPC) {
          return (
            <NetworksListItem
              key={`settings-network-list:${network.rpcUrl}`}
              network={network}
              networkIsSelected={networkIsSelected}
              selectedRpcUrl={selectedRpcUrl}
            />
          );
        }
      })}
    </div>
  );
};

NetworksList.propTypes = {
  networkDefaultedToProvider: PropTypes.bool,
  networkIsSelected: PropTypes.bool,
  networksToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRpcUrl: PropTypes.string,
};

export default NetworksList;
