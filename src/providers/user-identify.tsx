import { useDevCycleClient } from '@devcycle/react-client-sdk';
import type React from 'react';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const userId = 'test-user-id';

export const UserIdentifyProvider: React.FC<Props> = ({ children }) => {
  const isSubmitted = useRef(false);
  const client = useDevCycleClient();
  const identifyUser = useCallback(async () => {
    if (isSubmitted.current) {
      return;
    }
    await client.identifyUser({
      user_id: userId,
    });
    isSubmitted.current = true;
  }, [client]);

  useEffect(() => {
    identifyUser();
  }, [identifyUser]);

  return children;
};
